<template>
  <div class="page">
    <div class="login-box">
      <div style="font-size: 20px;margin-right: 214px;margin-bottom: 30px">用户登录:</div><div @click="toRegist">免费注册</div>
      <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" @input="change($event)" v-model="user.username"
                style="width: 300px;"></el-input>
      <el-input placeholder="请输入密码" prefix-icon="el-icon-user-solid" @input="change($event)" show-password
                v-model="user.password" style="width: 300px;margin-top: 30px"></el-input>
      <i-button type="success" style="width: 300px;margin-top: 30px" @click="toLogin()">登录</i-button>
      <div @click="toReset">忘记密码</div>
      <span style="display: flex;flex-direction: row;width: 24%;justify-content: space-around;margin-top: 30px">
        <span style="line-height: 70px;font-size: 18px">第三方登录:</span>
        <i style="color: skyblue;font-size: 45px" class="third-icon iconfont iconlogo-qq"></i>
        <i style="color: green;font-size: 40px" class="third-icon iconfont iconweixin"></i>
      </span>
    </div>
  </div>
</template>

<script>

  import {Message} from "element-ui";

  export default {
    name: "login",
    data() {
      return {
        user: {rememberMe: true}
      }
    },
    created() {
      this.$store.commit("SET_ROLES",[])
    },
    methods: {
      toIndex() {
        this.$router.push("/index");
      },
      toRegist(){
        this.$router.push("/regist");
      },
      toReset(){
        this.$router.push("/reset");
      },
      change(e) {
        this.$forceUpdate();
      },
      toLogin() {
        this.$api.login(this.user).then((data) => {
          this.$auth.setToken(data.resultData.userToken)
          this.$store.commit("SET_USER", data.resultData.userId);
          this.$router.push("/")
          Message({
            message: data.resultDesc,
            type: 'success',
            duration: 3 * 1000
          })
        });
      },
      removeToken() {
        this.$auth.removeToken()
      },
      getUser() {
        this.$api.getUser().then((data) => {
          console.log(data.resultData)
        })
      }
    }
  }
</script>

<style scoped>
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
  }
  .page {
    margin-top: 100px;
  }
</style>
