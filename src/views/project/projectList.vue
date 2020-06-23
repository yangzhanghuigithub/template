<template>
  <div class="page">
    <div class="title-box">
      <span class="title-left">
        <span class="my-project">我的项目</span>
        <span class="total-proj">共计2个</span>
        <el-input @input="change($event)"
                  placeholder="输入项目名称筛选"
                  v-model="input"
                  clearable>
        </el-input>
        <el-select class="search-sele" v-model="selectValue" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </span>
      <span>
         <el-button type="success" @click="createProj">创建项目</el-button>
      </span>
    </div>
    <div class="list-box">
      <span class="cont-box">
        <flag :title="title"></flag>

        <div>
          <div style="display: flex">
            <el-image
              style="width: 100px; height: 100px; margin: 20px"
              src="http://yzh:9080/lrhealth/u3201.png"
              fit="fill"></el-image>

            <span class="desc-box">
              <div>项目名称：多个肿瘤标记物水平与肺癌诊断及生存结局相关性分析</div>
              <div>项目描述：多个肿瘤标记物水平与肺癌诊断及生存结局相关性分析</div>
              <div>创建人：王医生</div>
            </span>
          </div>
          <div class="button-box">
            <button @click="toProjInfo">项目首页</button>
            <button>项目信息</button>
            <button>项目设计</button>
            <button>统计分析</button>
          </div>
        </div>

        <span class="anal-box">
          <div><span class="digi-box">1218</span>个研究对象</div>
          <div><span class="digi-box">39</span>个研究因素</div>
          <div>发布时间：2000-01-01</div>
        </span>

        <el-image
          style="width: 130px; height: 130px; margin: 45px;"
          src="http://yzh:9080/lrhealth/u2487.png"
          fit="fill"></el-image>
      </span>
    </div>
  </div>
</template>

<script>

  import flag from '../../components/flag/flag'

  export default {
    name: "project",
    data() {
      return {
        selectValue: [],
        options: [],
        title: '我参与的',
        input: ''
      }
    },
    methods: {
      toProjInfo(){
        this.$router.push("/pms/projectInfo")
      },
      change(e) {
        this.$forceUpdate();
      },
      createProj(){
        this.$router.push("/pms/addProject");
      }
    },
    components: {
      flag
    }
  }
</script>

<style scoped>
  .digi-box {
    color: #169BD5;
  }
  .button-box {
    margin: 25px;
  }
  .button-box button {
    height: 27px;
    line-height: 27px;
    width: 100px;
    margin-left: -4px;
  }
  .anal-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 90px;
    margin-top: 40px;
    font-size: 14px;
  }
  .anal-box div {
    margin-top: 20px;
  }
  .desc-box {
    margin-left: 30px;
    font-size: 14px;
  }
  .desc-box div {
    margin-top: 20px;
  }
  .list-box{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .cont-box {
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .title-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title-left {
    display: flex;
    flex-direction: row;
  }

  .my-project {
    width: 140px;
    font-size: 15px;
    font-weight: bold;
    align-self: center;
  }
  .total-proj {
    width: 120px;
    align-self: center;
  }
  .search-sele {
    margin-left: 15px;
  }
</style>
