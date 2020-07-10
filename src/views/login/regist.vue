<template>
  <div class="out-box">
    <div class="reg-content">
      <div class="reg-title">
        <img class="regi-logo" src="../../static/img/logo.png"/>
      </div>
      <div class="con-title">
        <span class="title-left">
          <span class="size24 color222">手机注册</span>
          <span class="size24 color666 mail">邮箱注册</span>
        </span>
        <span>
          <span class="size14 color444">已有账号,</span>
          <span class="size14 colorff7">马上登陆</span>
        </span>
      </div>
      <div class="con-content">
        <div class="reg-center">
          <div class="form-item">
            <label>手机号码</label>
            <el-input placeholder="请输入手机号" v-model="user.mobile" :disabled="false"></el-input>
          </div>
          <div class="form-item">
            <label>验证码</label>
            <span style="display: flex">
              <el-input placeholder="请输入手机验证码" style="margin-right: 20px;margin-left: -8px;" v-model="user.validCode" :disabled="false"></el-input>
              <el-button type="warning" @click="sendValidCode">获取验证码</el-button>
            </span>
          </div>
          <div class="form-item">
            <label>设置密码</label>
            <el-input placeholder="请设置登陆密码" v-model="user.password" :disabled="false"></el-input>
          </div>
          <div class="form-item">
            <el-checkbox v-model="checked" class="color555">我已阅读并接受&nbsp;<span class="colorff7">用户协议</span>&nbsp;和&nbsp;<span class="colorff7">隐私政策</span></el-checkbox>
          </div>
          <div class="form-item">
            <el-button type="primary" class="registry" @click="toRegist">立即注册</el-button>
          </div>
        </div>
      </div>
      <div class="con-footer">
        LRhealth-<span class="colorff7">EDC</span>&nbsp;科研服务平台·严谨的全功能&nbsp;EDC
      </div>
    </div>
  </div>
</template>

<script>
  import {Message} from "element-ui";

  export default {
    name: "retist",
    data() {
      return {
        user: {},
        checked: false
      }
    },
    methods: {
      sendValidCode(){
        this.$api.sendValiCode(this.user).then((data) => {
          Message({
            message: "获取验证码成功",
            type: 'success',
            duration: 3 * 1000
          })
        });
      },
      toRegist(){
        this.$api.regist(this.user).then((data) => {
          Message({
            message: "注册成功,请登录",
            type: 'success',
            duration: 3 * 1000
          })
          this.$router.push("/login")
        })
      }
    }
  }
</script>

<style scoped>
  .con-footer {
    margin-top: 33px;
  }
  .registry {
    width:370px;
    height:40px;
    background:rgba(53,115,185,1);
    border-radius:4px;
    margin-top: 32px;
  }
  label {
    width: 20%;
  }
  .form-item {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
  }
  .reg-center {
    margin: 36px;
    width: 370px;
  }

  .mail {
    margin-left: 52px;
  }

  .con-title {
    width: 800px;
    margin-top: 163px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .con-content {
    margin-top: 29px;
    background-color: #FFFFFF;
    width: 800px;
    height: 380px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .regi-logo {
    margin-left: 361px;
    height: 43px;
    align-self: center;
  }

  .reg-title {
    width: 100%;
    height: 80px;
    background-color: #3573B9;
    display: flex;
  }

  .reg-content {
    width: 100%;
    height: 100%;
    background-image: url("../../static/img/backgroud.png");
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
