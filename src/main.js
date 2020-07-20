import './icons';
import './permission';
import Vue from 'vue';
import api from './api';
import App from './App';
import axios from 'axios';
import iview from 'iview';
import auth from './utils'
import store from './store';
import '@/styles/index.scss';
import echarts from 'echarts';
import router from './router';
import iviewArea from 'iview-area';
import ElementUI from 'element-ui';
import 'iview/dist/styles/iview.css';
import '@/element-ui-theme/style.css';
import aesUtil from "./utils/AesUtil";
import rsaUtil from "./utils/RsaUtil";
import '@/static/iconfont/iconfont.css';
import cascaderMulti from 'cascader-multi';
import custom_form from './components/custom_form';

Vue.use(iview);
Vue.use(ElementUI);
Vue.use(iviewArea);
Vue.use(custom_form);
Vue.use(cascaderMulti);
Vue.config.productionTip = false

Vue.prototype.$api = api;
Vue.prototype.$aes = aesUtil;
Vue.prototype.$rsa = rsaUtil;
Vue.prototype.$auth = auth;
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;

Vue.directive("permission", {
  inserted: function (el, binding, vnode,oldVnode) {

  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
