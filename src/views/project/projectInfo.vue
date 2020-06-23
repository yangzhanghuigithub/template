<template>
  <div class="page">
    <span>
      <i class="iconfont iconjiaohuan"></i>
      <span class="title">多个肿瘤标记物水平与肺癌诊断及生存结局相关性分析</span>
    </span>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目首页" name="first">
        <div>
          <span class="search-box">
            <el-select v-model="value" clearable placeholder="默认组" style="width: 50%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="请输入内容" v-model="input2" style="margin-left: 30px;margin-right: 30px">
              <template slot="append">筛选</template>
            </el-input>
            <el-button class="icon-button" size="medium">
              <Icon type="ios-eye-outline"></Icon>
              字段预览模式</el-button>
            <el-button class="icon-button" size="medium">
              <i class="iconfont icondaochu but-icon"></i>
              数据导出</el-button>
            <el-button class="icon-button" size="medium">
              <i class="iconfont iconzijinbudaozhangdaoru but-icon"></i>
              数据导入</el-button>
            <el-button class="icon-button" size="medium">
              <i class="iconfont icon21 but-icon"></i>
              添加患者</el-button>
          </span>
        </div>
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
        activeName: 'first',
        options: [{}],
        value: '',
        input: '',
        input2: '',
        patientList: []
      }
    },
    created() {
      this.$api.patientList({pageIndex: 1, pageSize: 10}).then((data) => {
        console.log(data.resultDta);
      })
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .but-icon {
    font-size: 12px !important;
  }
  .iconfont {
    font-size: 20px;
  }
  .title {
    font-size: 18px;
    margin-left: 15px;
  }
  .search-box {
    margin-left: 0px;
    display: flex;
    flex-direction: row;
  }
</style>
