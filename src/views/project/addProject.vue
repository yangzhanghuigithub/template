<template>
  <div class="page">
    <div class="head-box">
      <!--  页头  -->
      <span>
        <span v-for="(ele,ind) in titleItem" class="proj-title-box">
        <i class="head-icon iconfont" :class="ele.icon"></i>
        <span class="proj-title" :class="{'span-active' : ele.isActive}">{{ele.title}}</span>
      </span>
      </span>
      <span>
        <!--  创建项目  -->
        <el-button type="success" @click="jumpTab(1,0, 1)" v-if="titleItem[0].isActive">继续下一步</el-button>
        <el-button type="success" @click="saveProj" v-if="titleItem[0].isActive">保存并退出</el-button>
        <!--  项目设计  -->
        <el-button type="success" @click="jumpTab(2,1, 0)" v-if="titleItem[1].isActive">上一步</el-button>
        <el-button type="success" @click="jumpTab(3,1, 2)" v-if="titleItem[1].isActive">继续下一步</el-button>
        <el-button type="success" @click="saveDesi" v-if="titleItem[1].isActive">保存并退出</el-button>
        <!--  项目发布  -->
        <el-button type="success" @click="jumpTab(4, 1)" v-if="titleItem[2].isActive">上一步</el-button>
        <el-button type="success" @click="savePubl" v-if="titleItem[2].isActive">保存并退出</el-button>
        <el-button type="success" @click="toPubl" v-if="titleItem[2].isActive">发布</el-button>
      </span>
    </div>
    <hr style="margin-top: 20px"/>

    <!--  创建项目  -->
    <div style="display: flex;flex-direction: row;" v-if="titleItem[0].isActive">
      <div style="width: 50%">
      <div>
        <span class="proj-info">
          项目信息
        </span>
        <span>
          <label><label class="must">*</label>项目名称</label>
          <el-input class="cont-right" @input="change($event)"
                    placeholder="请输入项目名称"
                    v-model.trim="project.projName"
                    clearable>
          </el-input>
        </span>
        <span>
          <label>项目英文名</label>
          <el-input class="cont-right" @input="change($event)"
                    placeholder="请输入项目英文名"
                    v-model.trim="project.englishName"
                    clearable>
          </el-input>
        </span>
        <span>
          <label><label class="must">*</label>项目领域</label>
          <el-select class="cont-right" v-model.trim="project.projArea" placeholder="请选择">
            <el-option v-for="(item, ind) in domainList"
              :key="ind"
              :label="item.name"
              :value="item.dictId">
            </el-option>
          </el-select>
        </span>
        <span class="upload-box">
          <label>项目图标</label>
          <el-image
            style="width: 100px; height: 100px; margin: 20px"
            :src="project.projIcon ? project.projIcon : this.$store.getters.defaultProjIcon"
            fit="fill"></el-image>
          <el-upload
            class="upload-demo"
            :action="fileUploadUrl"
            :headers="userToken"
            :on-success="iconUploadSuccessHandler"
            :show-file-list="false"
            :on-exceed="handleExceed"
            >
            <el-button size="small" type="primary"><i class="iconfont icon21"></i>上传图片</el-button>
          </el-upload>
        </span>
        <span>
          <label>研究机构</label>
          <el-input class="cont-right" @input="change($event)"
                    placeholder="请输入研究机构"
                    v-model.trim="project.projOrgnize"
                    clearable>
          </el-input>
        </span>
        <span>
          <label>研究描述</label>
          <el-input class="cont-right" @input="change($event)"
                    placeholder="请输入研究描述"
                    v-model.trim="project.projDesc"
                    clearable>
          </el-input>
        </span>
        <span>
          <label>起止时间</label>
          <el-date-picker class="cont-right"
            v-model.trim="dateValue"
            value-format="yyyy-MM-dd"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </span>
        <span>
          <label>项目注册号</label>
          <el-input class="cont-right" @input="change($event)"
                    placeholder="请输入项目注册号"
                    v-model="project.registNum"
                    clearable>
          </el-input>
        </span>
        <span>
          <label>项目备案号</label>
          <el-input class="cont-right" @input="change($event)"
                    placeholder="请输入项目备案号"
                    v-model="project.ethicNum"
                    clearable>
          </el-input>
        </span>
      </div>
    </div>
      <div style="border-left: 1px solid #9A9A9A;margin-left: 5%;padding-left: 20px">
        <span class="proj-info">
          我的项目文件<span style="font-size: 12px;font-weight: normal;margin-top: 0px">（0 M/500 M）</span>
        </span>
        <div style="font-size: 14px;margin-top: 40px">暂无附件</div>
        <el-upload
          class="upload-demo"
          :action="fileUploadUrl"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
        >
          <el-button size="small" style="margin-top: 20px" type="primary"><i class="iconfont icon21"></i>上传附件</el-button>
        </el-upload>
      </div>
    </div>

    <!--  项目设计  -->
    <div style="display: flex;flex-direction: column;" v-if="titleItem[1].isActive">
      <span class="proj-info">项目阶段设计</span>
      <span>
        <galf :title="galfTitle" :choo="choo"></galf>
        <el-button style="width: 140px;height: 30px; margin-left: 50px;font-size: 14px" size="small">
          <i class="iconfont icon21"></i>添加阶段
        </el-button>
        <Icon type="information-circled" style="font-size: 20px;padding-left: 5px"></Icon>
      </span>
    </div>

    <!--  项目发布  -->
    <div style="display: flex;flex-direction: column;" v-if="titleItem[2].isActive">
      <span class="proj-info">
          项目信息
      </span>
      <span>
        项目名称： 多个肿瘤标记物水平与肺癌诊断及生存结局相关性分析
      </span>
      <span>
        项目描述： 多个肿瘤标记物水平与肺癌诊断及生存结局相关性分析
      </span>
      <span>
        创建人： 王医生
      </span>
      <span>
        创建时间： 2020-01-01
      </span>
      <span class="proj-info">
          采集信息
      </span>
      <div style="display: flex;flex-direction: row">
        <div style="line-height: 276px;font-weight: bold;font-size: 18px;">基线</div>
        <div style="font-size: 164px">{</div>
        <div style="display: flex;flex-direction: column">
          <span>
            入院检验信息表
          </span>
            <span class="set-box">
            已设置20个字段（入院诊断，住院时间，年龄）
          </span>
            <span>
            一般检验信息
          </span>
            <span class="set-box">
            已设置20个字段（CEA， CA125，CY211，NSE，SCC）
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import galf from '../../components/flag/galf'
  import {Message} from "element-ui";

  export default {
    name: "addProject",
    data() {
      return {
        project: {projIcon: ''},
        domainList: [],
        galfTitle: '基线',
        choo: false,
        titleItem: [
          {icon: 'icontianjiaadd146', title: '创建项目', isActive: true},
          {icon: 'iconsheji', title: '项目设计', isActive: false},
          {icon: 'iconfabu1', title: '项目发布', isActive: false}
        ],
        fileUploadUrl: process.env.BASE_API + '/base/minio/upload',
        userToken: {'LRHEALTH-AUTHORIZATION-TOKEN': this.$auth.getToken()},
        dateValue: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
    },
    created() {
      this.getDomain();
    },
    methods: {
      iconUploadSuccessHandler(res, file, fileList){
        console.log(res)
        this.project.projIcon = res.resultData.fileUrl;
      },
      getDomain(){
        this.$api.dictList({typeId: this.$store.getters.projectDomain}).then((data) => {
          this.domainList = data.resultData;
        })
      },
      jumpTab(type, i, j){
        this.titleItem[i].isActive = false;
        this.titleItem[j].isActive = true;
        if (type == 1){
          this.saveProj();
        }
      },
      saveProj(){
        this.project.startTime = this.dateValue[0];
        this.project.endTime = this.dateValue[1];
        this.$api.saveProject(this.project).then((data) => {
          Message({
            message: data.resultDesc,
            type: 'success',
            duration: 3 * 1000
          })
        })
      },
      change(e) {
        this.$forceUpdate();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
      }
    },
    components: {
      galf
    }
  }
</script>

<style scoped>
  .set-box {
    height: 50px;
    border: 1px solid gray;
    line-height: 50px;
    padding-left: 20px;
  }
  .page {
    margin-top: 0px;
  }
  .span-active {
    border-bottom: 2px solid #81D3F8;
    color: #81D3F8
  }
  .proj-title-box {
    margin-top: 0px !important;
    margin-right: 90px;
    height: 35px;
  }
  .proj-title {
    margin-top: 0px !important;
    margin-left: 10px;
  }
  .proj-info {
    font-weight: bold;
    font-size: 15px;
  }
  .upload-box {
    display: flex;
    justify-content: space-between;
  }
  .upload-demo {
    align-self: center;
  }
  .cont-right {
    width: 90%;
  }
  label {
    width: 15%;
    line-height: 40px;
    align-self: center;
  }
  .head-icon {
    font-size: 20px;
  }
  .head-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 0px !important;
  }
  div span {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
</style>
