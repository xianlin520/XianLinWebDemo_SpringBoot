new Vue({
    el: '#app',
    mounted() {
        this.loginRemind();
    },
    methods: {
        onSubmit() {
            let _this = this;
            axios.post("/users", this.form).then(function (response) {
                if (response.data.code == 20011) {
                    // alert("登录成功");
                    localStorage.setItem('UserData', JSON.stringify(response.data.data)); // 存储用户信息, 存入浏览器本地缓存, 用于同域名下的页面访问
                    // sessionStorage.setItem('UserData', response.data.data); // 存储用户信息, 存入浏览器会话缓存, 用于同页面下的不同域名下的页面访问
                    _this.$message.success("登录成功, 正在跳转...");
                    setTimeout(function () {
                        location.href = "/"; // 跳转到首页
                    }, 800);
                } else {
                    _this.$message.error("登录失败");
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        loginRemind() {
            const h = this.$createElement;
            this.$notify({
                title: '您尚未登录, 请先登录',
                message: h('i', { style: 'color: teal'}, '登录后即可正常访问其他页面, 如果您还没有账号, 请先注册; 如忘记密码, 请联系管理员QQ2683971783'),
            });
        }
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