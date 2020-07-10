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
  .size14 {
    font-size: 14px;
  }
  .size24 {
    font-size: 24px;
  }
  .colorff7 {
    color: #FF7000;
  }
  .color222 {
    color: #222222;
  }
  .color555 {
    color: #555555;
  }
  .color444 {
    color: #444444;
  }
  .color666 {
    color: #666666;
  }
</style>
