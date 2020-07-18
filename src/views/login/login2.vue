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
        let b = this.$aes.encrypt("11111", "4344352345")
        console.log(b)
        // let c = this.$rsa.encrypt("11111", "4r34rwqerwerf");
        // console.log(c)


        //普通字符串
        let text = "huanzi.qch@qq.com:欢子";

//秘钥对
        let keyPair = this.$rsa.genKeyPair();
//公钥加密
        let ciphertext = this.$rsa.encrypt(text,keyPair.publicKey);
//私钥解密
        let plaintext = this.$rsa.decrypt(ciphertext,keyPair.privateKey);


        console.log("秘钥：");console.log(keyPair.privateKey);
        console.log("公钥：" + keyPair.publicKey);
        console.log("加密前：" + text);
        console.log("公钥加密后：" + ciphertext);
        console.log("解密后：" + plaintext);
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
