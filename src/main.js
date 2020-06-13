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
import {initMenu} from './utils/utils'
import cascaderMulti from 'cascader-multi';
import custom_form from './components/custom_form';

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

router.beforeEach((to, from, next)=> {
    if (to.name == 'login') {

      initMenu(router, store);
      next();
      return;
    }
    var name = store.state.user.name;
    if (name == '未登录') {
      if (to.meta.requireAuth || to.name == null) {
        next({path: '/', query: {redirect: to.path}})
      } else {
        next();
      }
    } else {
      initMenu(router, store);
      if(to.path=='/chat')
      next();
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
