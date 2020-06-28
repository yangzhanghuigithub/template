<template>
  <div style="display: flex;">
    <span class="i-a" :class="{'nochose': choo}">{{title}}</span>
    <div class="i-b" :class="{'nochose': choo}"></div>
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

  .i-a.nochose {
    background: #D7D7D7 !important;
  }

  .i-b.nochose {
    border-left: 15px solid #D7D7D7 !important;
  }
</style>
