<template>
  <div class="page">
    <span>
      <i class="iconfont iconjiaohuan1"></i>
      <span class="title">多个肿瘤标记物水平与肺癌诊断及生存结局相关性分析</span>
    </span>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目首页" name="first">

      </el-tab-pane>
      <el-tab-pane label="项目信息" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="项目文件" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="成员管理" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="分组管理" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="项目设计" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="统计分析" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "projectInfo",
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .iconfont {
    font-size: 20px;
  }
  .title{
    font-size: 18px;
    margin-left: 15px;
  }
</style>
