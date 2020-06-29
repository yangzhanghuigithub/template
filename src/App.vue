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
  }
  /*下部直线*/
  .bold-line {
    border-top:2px solid #D7D7D7;
    width: 100%;
    text-align: center;
    height: 2px;
    display: inline-block;
  }
</style>
