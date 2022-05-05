new Vue({
    el: '#user-home',
    mounted() {
        // 初始化页面数据
        this.init();
        // 拉取歌曲列表
        this.pullMusic();
    },
    methods: {
        init() {
            let _this = this;
            // 获取LocalStorage中的用户信息
            let userData = JSON.parse(localStorage.getItem('UserData'));
            // 获取用户数据并绑定到模型
            this.UserData.userQQ = userData.userQQ;
            this.UserData.userName = userData.userName;
        },
        obtainMusic(musicId) {
            let _this = this;
            // 获取歌曲信息
            axios.get("http://ovooa.com/API/wydg/api.php?" + musicId)
                .then(response => {
                    let SongData = response.data.data;
                    // 将每个歌曲信息添加到歌曲列表中
                    _this.MusicDataList.push(SongData);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        pullMusic() {
            let _this = this;
            // 获取用户收藏歌曲列表ID
            axios.get('/musics/' + _this.UserData.userQQ).then(function (response) {

                _this.MusicIdListS = response.data.data;
                _this.MusicIdListS.forEach(function (item) {
                    // 遍历歌曲ID数组, 传入方法内
                    _this.obtainMusic(item.musicId);
                    // 将歌曲ID存入MusicIdList
                    _this.MusicIdList.push(item);
                });
            });

        },
        // 用户编辑
        edit() {

        }
    },
    data(){
        return {
            UserData:{
                userName:"",
                userQQ:"2683971783",
            },
            // 歌曲ID列表
            MusicIdList: [],
            // 歌曲列表
            MusicDataList: [],
        }
    }
})