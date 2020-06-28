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
            <i-table width="100%" height="300" border :columns="patientColumns" :data="patientList"></i-table>
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
        <div class="pane-box">
          <span class="info-title">
            <span class="info-title-head">项目信息</span>
            <span>创建人：王医生</span>
            <span>创建时间：2020-06-01</span>
            <span>发布时间：2020-06-02</span>
          </span>
          <hr/>
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
      <el-tab-pane label="项目文件" name="third">
        <div class="pane-box">
          <span class="info-title">
            <span class="info-title-head">我的项目文件</span>
            <span>（30 M/500 M）</span>
          </span>
          <hr style="margin-bottom: 20px"/>
          <div style="width: 80%">
            <i-table border :content="self" :columns="fileColumns" :data="fileList"></i-table>
          </div>
          <span>
            <el-button style="margin-top: 20px" size="small"><i class="iconfont icon21" style="font-size: 14px"></i>上传文件</el-button>
            <span style="margin-left: 15px">注：单个上传文件大小限制为50M</span>
          </span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="成员管理" name="fourth">
        <div>
          <div style="margin-bottom: 20px">
            <el-button style="margin-top: 20px" size="small"><i class="iconfont icon21" style="font-size: 14px"></i>上传文件</el-button>
          </div>
          <span>
            <i-table border :columns="memberColumns" :data="memberList"></i-table>
          </span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分组管理" name="fifth">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label">
              <el-dropdown>
                <span class="el-dropdown-link">
                  默认分组<Icon type="navicon-round" style="margin-left: 15px;font-size: 16px"></Icon>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>分组名称</el-dropdown-item>
                  <el-dropdown-item>删除分组</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </span>
            <span>
              <span>纳排条件：</span>
              <el-input
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 8}"
                placeholder="请输入内容"
                v-model="textarea2">
              </el-input>
            </span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <Icon style="margin-right: 5px;font-size: 20px" type="android-add"></Icon>默认分组
                </span>
              </el-dropdown>
            </span>
            <span>
              <span>纳排条件：</span>
              <el-input
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 8}"
                placeholder="请输入内容"
                v-model="textarea2">
              </el-input>
            </span>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="项目设计" name="sixth">
        <span class="process-box">
          <span v-for="(ele, ind) in galfList" :key="ind" class="proc-next-box">
            <galf :title="ele.title" :choo="ele.choo"></galf>
            <span class="cell_dashed"></span>
            <el-button round>{{ele.date}}</el-button>
            <span class="cell_dashed"></span>
          </span>
        </span>
      </el-tab-pane>
      <el-tab-pane label="统计分析" name="seven">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  import galf from "../../components/flag/galf";

  export default {
    name: "projectInfo",
    components: {galf},
    data() {
      return {
        galfList: [
          {title: '基线', choo: false, date: '10天±3天'},
          {title: '治疗阶段A', choo: true, date: '10天±3天'}
        ],
        memberColumns: [
          {title: '成员姓名',key: 'name'},
          {title: '联系方式',key: 'phone'},
          {title: '账号',key: 'username'},
          {title: '角色',key: 'role'}
        ],
        memberList: [
          {name: 'yzh', phone: '13749374934', username: 'yzh', role: 'admin'},
          {name: 'yzh', phone: '13749374934', username: 'yzh', role: 'admin'},
          {name: 'yzh', phone: '13749374934', username: 'yzh', role: 'admin'},
          {name: 'yzh', phone: '13749374934', username: 'yzh', role: 'admin'},
          {name: 'yzh', phone: '13749374934', username: 'yzh', role: 'admin'}
        ],
        patientColumns: [
          {title: '状态', key: 'state', width: 100, fixed: 'left'},
          {title: '患者姓名', key: 'patientName', width: 100, fixed: 'left'},
          {title: '联系方式', key: 'mobile', width: 120},
          {title: '住院号', key: 'hospitalNum', width: 100},
          {title: '性别', key: 'sex', width: 100},
          {title: '出生日期', key: 'birthday', width: 100},
          {title: '基线', key: 'action', width: 150, fixed: 'right',
            render: (h, params) => {return h('div', {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }
            },[
              h('span', {
                style: {
                  width: '100%',
                  textAlign: 'center'
                },
                on: {
                  click: () => {

                  }
                }
              }, '纳排条件'),
              h('span', {
                style: {
                  width: '100%',
                  textAlign: 'center'
                },
                on: {
                  click: () => {

                  }
                }
              }, '检验指标')
            ]);
            }
          },
          {title: '治疗过程', key: 'action', width: 100, fixed: 'right',
            render: (h, params) => {return h('div', {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }
            },[
              h('span', {
                style: {
                  width: '100%',
                  textAlign: 'center'
                },
                on: {
                  click: () => {

                  }
                }
              }, '医嘱清单')
            ]);
            }
          },
          {title: '治疗结局', key: 'action', width: 100, fixed: 'right',
            render: (h, params) => {return h('div', {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
              }
            },[
              h('span', {
                style: {
                  width: '100%',
                  textAlign: 'center'
                },
                on: {
                  click: () => {

                  }
                }
              }, '生存指标')
            ]);
            }
          }
        ],
        fileColumns: [
          {title: '文件名', key: 'name'},
          {title: '大小', key: 'size'},
          {title: '上传人', key: 'create'},
          {title: '隐私', key: 'priv'},
          {title: '操作', key: 'opera',
            render: (h, params) => {
              return h('div', {
                style: {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around'
                }
              },[
                h('Icon', {
                  props: {
                    type: 'android-download'
                  },
                  style: {
                    fontSize: '30px'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, ''),
                h('Icon', {
                  props: {
                    type: 'android-delete'
                  },
                  style: {
                    fontSize: '30px'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '')
              ]);
            }
          }
        ],
        fileList: [
          {name: 'aaa', size: '1M',create: 'yzh', priv: '公开' },
          {name: 'aaa', size: '1M',create: 'yzh', priv: '公开' },
          {name: 'aaa', size: '1M',create: 'yzh', priv: '公开' },
          {name: 'aaa', size: '1M',create: 'yzh', priv: '公开' },
          {name: 'aaa', size: '1M',create: 'yzh', priv: '公开' },
          {name: 'aaa', size: '1M',create: 'yzh', priv: '公开' },
          {name: 'aaa', size: '1M',create: 'yzh', priv: '公开' }
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
        this.patientList.forEach(function(ele, ind){
          ele.state = '已录入';
        });
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
  .cell_dashed{
    border-bottom:1px dashed #D7D7D7;
    width: 60px;
    text-align: center;
  }
  .proc-next-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .process-box {
    display: flex;
    flex-direction: row;
  }
  .pane-box {
    margin-top: 30px
  }
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
