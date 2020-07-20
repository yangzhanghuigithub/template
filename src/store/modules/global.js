import {SET_JSPUBLICKEY, SET_JSPRIVATEKEY} from '../store-type';
const global = {
  state: {
    //超级管理员用户主键
    adminUserKey: 10000000,
    //用户tokenKey
    userTokenKey: 'LRHEALTH-AUTHORIZATION-TOKEN',
    //项目领域字段类型主键
    projectDomain: 10000000,
    //默认项目图标
    defaultProjIcon: 'http://yzh:9080/lrhealth/u3201.png',
    //每个crf可以包含的题组数
    questionNum: 5,
    //是否开始API加密
    apiEncrypt: false,
    // 前台公钥
    jsPublicKey: '',
    //前台私钥
    jsPrivateKey: ''
  },

  mutations: {
    [SET_JSPUBLICKEY] (state, jsPublicKey){
      state.jsPublicKey = jsPublicKey;
    },
    [SET_JSPRIVATEKEY] (state, jsPrivateKey){
      state.jsPrivateKey = jsPrivateKey;
    }
  }
}

export default global;
