<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }

</script>
<style>
  html,body,#app,.out-box {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #F0F0F0;
  }
  .mr5 {
    margin-right: 5px;
  }
  .mr10 {
    margin-right: 10px !important;
  }
  .ml5 {
    margin-left: 5px;
  }
  .ml10 {
    margin-left: 10px;
  }
  .pl10 {
    padding-left: 10px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt10 {
    margin-top: 10px;
  }
  /*页面边样式*/
  .page {
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  /*必填项*样式*/
  .must {
    color: red;
    font-size: 10px;
  }
  /*添加按钮+样式*/
  .icon21 {
    font-size: 13px;
    margin-right: 15px;
  }
  /*下部直线*/
  .bold-line {
    border-top:2px solid #D7D7D7;
    width: 100%;
    text-align: center;
    height: 2px;
    display: inline-block;
  }
  .com-footer {
    height: 18.5%;
    display: flex;
    justify-content: center;
    background:rgba(240,240,240,1);
  }
  .white-button {
    background:rgba(255,255,255,1);
    border:1px solid rgba(53,115,185,1);
    border-radius:4px;
  }
  .blue-button {
    background:rgba(53,115,185,1);
    border-radius:4px;
  }
  .headImg {
    height: 14px;
  }
  .com-header {
    height: 8.3%;
  }
  .bold {
    font-weight: bold;
  }
  .size8 {
    font-size: 8px;
   }
  .size12 {
    font-size: 12px;
   }
  .size14 {
    font-size: 0.8em;
  }
  .size16 {
    font-size: 16px;
  }
  .size20 {
    font-size: 20px;
  }
  .size24 {
    font-size: 1.5em;
  }
  .color357{
    color: #3573B9;
  }
  .colorfff {
    color: #FFFFFF;
  }
  .colorff7 {
    color: #FF7000;
  }
  .color222 {
    color: #222222;
  }
  .color444 {
    color: #444444;
  }
  .color555 {
    color: #555555;
  }
  .color666 {
    color: #666666;
  }
  .pointer {
    cursor: pointer;
  }
</style>
