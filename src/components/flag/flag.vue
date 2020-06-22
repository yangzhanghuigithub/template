<template>
  <div class="box">
    <i></i>
    <span>{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: "flag",
    props : {
      title: ''
    }
  }
</script>

<style scoped>
  .box {
    position: relative;
    display: inline-block;
  }

  .box span {
    position: absolute;
    top: 0;
    width: 40px;
    height: 70px;
    line-height: 28px;
    text-align: center;
    color: #fff;
    margin-left: -29px;
    writing-mode: vertical-lr;
  }
  i {
    display: inline-block;
    width: 0;
    height: 0;
    font-size: 0;
    overflow: hidden;
    border-style: solid solid dashed;
    border-width: 65px 14px 14px;
    border-color: #169BD5 #169BD5 transparent;
  }
</style>
