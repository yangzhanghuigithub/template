<template>
  <div class="reg-title">
    <img class="regi-logo" :class="{'pro-content': content}" src="../../static/img/logo.png" style="outline: none !important;"/>
  </div>
</template>

<script>
  export default {
    name: "header",
    props: {
       content: true
    },
  }
</script>

<style scoped>
  .reg-title {
    width: 100%;
    background-color: #3573B9;
    display: flex;
  }

  .regi-logo {
    margin-left: 18.75%;
    height: 70%;
    align-self: center;
  }

  .pro-content {
    margin-left: 53px;
  }
</style>
