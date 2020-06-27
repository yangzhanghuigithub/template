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
          <span>
            <i-table width="100%" height="300" border :columns="columnList" :data="patientList"></i-table>
          </span>
          <div style="margin-top: 30px">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目信息" name="second">
        <div style="margin-top: 30px">
          <span class="info-title">
            <span class="info-title-head">项目信息</span>
            <span>创建人：王医生</span>
            <span>创建时间：2020-06-01</span>
            <span>发布时间：2020-06-02</span>
          </span>
          <hr>
          <span class="info-body-box">
            <div>
              <label>项目图标：</label>
              <el-image
                style="width: 100px; height: 100px; margin: 20px"
                src="http://yzh:9080/lrhealth/u3201.png"
                fit="fill"></el-image>
            </div>
            <div>
              <label>项目名称：</label>
              <span>多个肿瘤标记物水平与肺癌诊断及生存结局相关性分析</span>
            </div>
            <div>
              <label>项目英文名：</label>
              <span>无</span>
            </div>
            <div>
              <label>研究机构：</label>
              <span>北京大学第三医院</span>
            </div>
            <div>
              <label>项目描述：</label>
              <span>无</span>
            </div>
            <div>
              <label>起止时间：</label>
              <span>2020-01-01 至  2020-12-31</span>
            </div>
            <div>
              <label>项目注册号：</label>
              <span>无</span>
            </div>
            <div>
              <label>伦理备案号：</label>
              <span>无</span>
            </div>
          </span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目文件" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="成员管理" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="分组管理" name="fifth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="项目设计" name="sixth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="统计分析" name="seven">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "projectInfo",
    data() {
      return {
        columnList: [
          {title: '状态', key: 'state', width: 100, fixed: 'left'},
          {title: '患者姓名', key: 'patientName', width: 100, fixed: 'left'},
          {title: '联系方式', key: 'mobile', width: 130},
          {title: '住院号', key: 'hospitalNum', width: 100},
          {title: '性别', key: 'sex', width: 100},
          {title: '出生日期', key: 'birthday', width: 100},
          {title: '基线', key: 'action', width: 120, fixed: 'right',
            render () {
              return `<i-button type="text" size="small">查看</i-button><i-button type="text" size="small">编辑</i-button>`;
            }
          },
          {title: '治疗过程', key: 'action', width: 130, fixed: 'right',
            render () {
              return `<i-button type="text" size="small">查看</i-button><i-button type="text" size="small">编辑</i-button>`;
            }
          },
          {title: '治疗结局', key: 'action', width: 140, fixed: 'right',
            render () {
              return `<i-button type="text" size="small">查看</i-button><i-button type="text" size="small">编辑</i-button>`;
            }
          }
        ],
        activeName: 'first',
        options: [{}],
        value: '',
        input: '',
        input2: '',
        patientList: [],
        currentPage: 1
      }
    },
    created() {
      this.$api.patientList({pageIndex: 1, pageSize: 10}).then((data) => {
        this.patientList = data.resultData.records;
        console.log(data.resultData)
      })
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .info-body-box div{
    margin-top: 25px;
    font-size: 14px;
  }
  .info-title-head{
    font-weight: bold;
    font-size: 20px !important;
  }
  .info-title span {
    margin-right: 20px;
    font-size: 14px;
  }
  label {
    display: inline-block;
    width: 10%;
  }
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
    margin-top: 30px;
    flex-direction: row;
    margin-bottom: 20px;
  }
</style>
