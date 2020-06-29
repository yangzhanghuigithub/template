<template>
  <el-button onclick="toCreateCrf()" class="add-crf" size="small">
    <i class="iconfont icon21"></i>添加CRF
  </el-button>
</template>

<script>
  export default {
    name: "addcrf",
    props: {

    },
    methods: {
      toCreateCrf(){
        this.$emit("toCreateCrf");
      }
    }
  }
</script>

<style scoped>

</style>
