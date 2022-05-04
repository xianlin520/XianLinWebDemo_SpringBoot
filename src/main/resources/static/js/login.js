new Vue({
    el: '#app',
    mounted() {
    },
    methods: {
        onSubmit() {
            let _this = this;
            axios.post("/users", this.form).then(function (response) {
                if (response.data.code == 20011) {
                    // alert("登录成功");
                    localStorage.setItem('UserData', response.data.data); // 存储用户信息, 存入浏览器本地缓存, 用于同域名下的页面访问
                    // sessionStorage.setItem('UserData', response.data.data); // 存储用户信息, 存入浏览器会话缓存, 用于同页面下的不同域名下的页面访问
                    _this.$message.success("登录成功");
                } else {
                    _this.$message.error("登录失败");
                }
            }).catch(function (error) {
                console.log(error);
            });
            /*axios({
                method: "post",
                url: "/login?userQQ=" + this.form.QQ + "&userPassword=" + this.form.password,
                data: this.form
            }).then(function (response) {
                if (response.data == 200) {
                    // alert("登录成功");
                    _this.$message.success("登录成功");
                } else {
                    _this.$message.error("登录失败");
                }
            }).catch(function (error) {
                console.log(error);
            });*/
        },
    },
    data() {
        return {
            form: {
                userQQ: '',
                userPassword: ''
            },
            loginType: false,
        }
    }
})