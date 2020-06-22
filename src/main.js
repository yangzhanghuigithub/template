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
import '@/static/iconfont/iconfont.css';
import '@/element-ui-theme/style.css'
import cascaderMulti from 'cascader-multi';
import custom_form from './components/custom_form';

Vue.use(iview);
Vue.use(ElementUI);
Vue.use(iviewArea);
Vue.use(custom_form);
Vue.use(cascaderMulti);
Vue.config.productionTip = false

Vue.prototype.$api = api;
Vue.prototype.$auth = auth;
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
