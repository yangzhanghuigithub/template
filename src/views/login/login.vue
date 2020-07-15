<template>
  <div class="out-box">
    <uphead class="com-header"></uphead>
    <div class="reg-content">
      <div class="log-content">
        <span>
          <img src="../../static/img/login.png" />
        </span>
        <span>
          <div>
            <span>

            </span>
            <span>

            </span>
          </div>
          <div>
            <el-input placeholder="请输入手机号/邮箱" v-model="user.mobile" :disabled="false"></el-input>
          </div>
          <div>
            <el-input placeholder="请输入密码" v-model="user.mobile" :disabled="false"></el-input>
          </div>
          <div>
              <el-checkbox v-model="checked" class="color555">自动登录</el-checkbox>
          </div>
          <div>
              <el-button type="primary">主要按钮</el-button>
          </div>
          <div>
              <span>
                免费注册
              </span>
              <span>
                忘记密码?
              </span>
          </div>
          <div>
            <div>

            </div>
          </div>
        </span>
      </div>
    </div>
    <dofoot class="com-footer"></dofoot>
  </div>
</template>

<script>

  import {Message} from "element-ui";
  import dofoot from '../../components/common/footer';
  import uphead from '../../components/common/header';

  export default {
    name: "login",
    data() {
      return {
        user: {"registType" : 1},
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
            message: data.resultData,
            type: 'success',
            duration: 3 * 1000
          })
          this.$router.push("/login")
        })
      },
      jumpRegi(type){
        this.user.registType = type;
      }
    },
    components: {
      uphead,
      dofoot
    }
  }
</script>

<style scoped>
  .title-left {
    width: 50%;
  }
  .con-footer {
    margin-top: 33px;
    text-align: center;
  }
  .registry {
    width:370px;
    height:40px;
    background:rgba(53,115,185,1);
    border-radius:4px;
    margin-top: 5%;
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
    margin: 25px;
    width: 370px;
  }

  .mail {
    margin-right: 2.5%;
  }

  .con-title {
    width: 42%;
    margin-top:4%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .con-content {
    margin-top: 20px;
    background-color: #FFFFFF;
    width: 42%;
    min-height: 380px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .reg-content {
    width: 100%;
    height: 73.2%;
    background-image: url("../../static/img/backgroud.png");
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
