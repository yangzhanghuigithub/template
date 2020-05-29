<template>
  <div class="page">
    <div class="login-box">
      <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" @input="change($event)" v-model="user.username" style="width: 300px;"> </el-input>
      <el-input placeholder="请输入密码" prefix-icon="el-icon-user-solid" @input="change($event)" show-password v-model="user.password" style="width: 300px;margin-top: 30px"> </el-input>
<!--      <i-input icon :value.sync="username" placeholder="请输入用户名" style="width: 300px"></i-input>-->
<!--      <i-input :value.sync="password" placeholder="请输入密码" style="width: 300px;margin-top: 30px"></i-input>-->
      <i-button type="success" style="width: 300px;margin-top: 30px" @click="toLogin()" long>登录</i-button>
      <i-button type="success" style="width: 300px;margin-top: 30px" @click="toIndex()" long>去拖拽</i-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
          return {
            user: {}
          }
        },
        methods: {
          toIndex(){
            this.$router.push("/index");
          },
          change(e){
            this.$forceUpdate();
          },
          toLogin(){
            var a = this.$api.login(this.user);
            console.log(a)
          }
        }
    }
</script>

<style scoped>
  .login-box{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
  }
</style>
