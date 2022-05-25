new Vue({
    el: '#app',
    data: {
        dataList: [],
        bData: [],
        show: true,
    },
    methods: {
        pushDataList(){
            axios.get("http://localhost/data/getData").then(res => {
                res.data.forEach((item, index) => {
                    // 将item作为name，index作为id, 传入dataList
                    this.dataList.push({name: item, id: index, bool: false});
                });
            });
            console.log()
        },
        pushBData(){
            axios.get("http://localhost/data/getBData").then(res => {
                res.data.forEach((item, index) => {
                    // 将item作为name，index作为id, 传入BData
                    this.bData.push({name: item, id: index, bool: false});
                });
            });
        },
        delBData(){
            this.bData.forEach(item=> {
                if(item.bool){
                    axios.get("http://localhost/data/"+item.name)
                }
            });
            // this.refresh();
        },

        addBData(){
            this.dataList.forEach(item => {
                if(item.bool){
                    axios.post("http://localhost/data/"+item.name)
                }
            });
            // this.refresh();
        },
        refresh() {
            this.dataList = [];
            this.bData = [];
            this.pushDataList();
            this.pushBData();
        },
    },
    mounted() {
        this.pushDataList();
        this.pushBData();
    }
})