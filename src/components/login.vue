<template>
  <div class="page">
    <div class="login-box">
      <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" @input="change($event)" v-model="user.username"
                style="width: 300px;"></el-input>
      <el-input placeholder="请输入密码" prefix-icon="el-icon-user-solid" @input="change($event)" show-password
                v-model="user.password" style="width: 300px;margin-top: 30px"></el-input>
      <!--      <i-input icon :value.sync="username" placeholder="请输入用户名" style="width: 300px"></i-input>-->
      <!--      <i-input :value.sync="password" placeholder="请输入密码" style="width: 300px;margin-top: 30px"></i-input>-->
      <i-button type="success" style="width: 300px;margin-top: 30px" @click="toLogin()" long>登录</i-button>
    </div>
  </div>
</template>

<script>

  import {Message} from "element-ui";

  export default {
    name: "login",
    data() {
      return {
        user: {}
      }
    },
    created() {
      this.$store.commit("SET_ROLES",[])
    },
    methods: {
      toIndex() {
        this.$router.push("/index");
      },
      change(e) {
        this.$forceUpdate();
      },
      toLogin() {
        this.$api.login(this.user).then((data) => {
          this.$auth.setToken(data.resultData.userToken)
          window.sessionStorage.setItem("user", data.resultData)
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
