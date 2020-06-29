<template>
  <el-button onclick="createCrf()" class="add-crf" size="small">
    <i class="iconfont icon21"></i>添加CRF
  </el-button>
</template>

<script>
  export default {
    name: "addcrf",
    props: {

    },
    methods: {
      createCrf(){
        this.$emit("createCrf");
      }
    }
  }
</script>

<style scoped>
  .add-crf {
    width: 140px;
    height: 30px;
    margin-top: 25px;
    font-size: 14px
  }
</style>
