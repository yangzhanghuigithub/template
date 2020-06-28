<template>
  <div class="out-box">
    <div style="display: flex">
      <span class="i-a" :class="{'nochose': choo}">{{title}}</span>
      <div class="i-b" :class="{'nochose': choo}"></div>
    </div>
    <div class="i-c"></div>
  </div>
</template>

<script>
  export default {
    name: "galf",
      props: {
        title:'',
        choo: true
      }
  }
</script>

<style scoped>
  .out-box {

  }
  .i-a {
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    background: #16A085;
    text-align: center;
    color: white;
  }

  .i-b {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 15px solid #16A085;
    border-bottom: 15px solid transparent;
  }


  .i-c {
    margin-left: 56px;
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 0;
    border-top: 2px solid #D7D7D7;
    border-right: 2px solid #D7D7D7;
    -webkit-transform: translate(7px, 14px) rotate(-45deg);
    -ms-transform: translate(7px, 14px) rotate(-45deg);
    -o-transform: translate(7px, 14px) rotate(-45deg);
    transform: translate(7px, 14px) rotate(-45deg);
  }
  .i-c:after {
    position: absolute;
    left: 0;
    top: -2px;
    width: 31px;
    height: 2px;
    content: '';
    border-radius: 2px;
    background-color: #D7D7D7;
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .i-a.nochose {
    background: #D7D7D7 !important;
  }

  .i-b.nochose {
    border-left: 15px solid #D7D7D7 !important;
  }
</style>
