<template>
  <div class="page">
    <div class="title-box">
      <span class="title-left">
        <span class="my-project">我的项目</span>
        <span class="total-proj">共计{{projectList.length}}个</span>
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
      <span class="cont-box" v-for="(ele, ind) in projectList" :key="ind" style="margin-top: 20px">
        <flag :title="ele.createUser == $store.getters.adminUserKey ? '示例项目' : '我创建的'"></flag>

        <div>
          <div style="display: flex">
            <el-image
              style="width: 100px; height: 100px; margin: 20px"
              :src="ele.projIcon"
              fit="fill"></el-image>

            <span class="desc-box">
              <div>项目名称：{{ele.projName}}</div>
              <div>项目描述：{{ele.projDesc}}</div>
              <div>创建人：{{ele.createUserName}}</div>
            </span>
          </div>
          <div class="button-box">
            <button @click="toProjInfo('first')">项目首页</button>
            <button @click="toProjInfo('second')">项目信息</button>
            <button @click="toProjInfo('sixth')">项目设计</button>
            <button @click="toProjInfo('seven')">统计分析</button>
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

        <Dropdown trigger="click" style="margin-right: 10px">
          <a href="javascript:void(0)">
              <Icon type="more" style="font-size: 20px"></Icon>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item @click.native="deleteProject(ele.projId)" style="color: #7F7F7F"><Icon type="android-delete" style="margin-right: 8px;color: #7F7F7F"></Icon>删除本项目</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
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
        input: '',
        projectList: []
      }
    },
    created() {
      this.$api.projectList().then((data) => {
        this.projectList = data.resultData;
        console.log(this.projectList)
      })
    },
    methods: {
      deleteProject(id){
        this.$confirm('删除后本项目不可恢复，是否确认删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$api.deleteProject().then((data) => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      toProjInfo(tabName){
        this.$router.push({
          path: '/pms/projectInfo',
          name: 'projectInfo',
          params: {
            tabName: tabName
          }
        })
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
    margin-left: 30px;
    width: 155px;
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
