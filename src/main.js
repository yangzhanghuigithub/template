import Vue from 'vue';
import api from './api';
import App from './App';
import iview from 'iview';
import auth from './utils'
import store from './store';
import router from './router';
import iviewArea from 'iview-area';
import ElementUI from 'element-ui';
import 'iview/dist/styles/iview.css';
import '@/element-ui-theme/style.css'
import cascaderMulti from 'cascader-multi';
import custom_form from './components/custom_form';
import '@/styles/index.scss'
import './permission'
import './icons'
import axios from 'axios';

Vue.use(iview);
Vue.use(ElementUI);
Vue.use(iviewArea);
Vue.use(custom_form);
Vue.use(cascaderMulti);
Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$auth = auth;
Vue.prototype.$api = api;
console.log(auth.getToken)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
