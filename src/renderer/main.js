// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';;
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import '../renderer/assets/css/reset.css'
import '../renderer/assets/font/font.css'
import '../renderer/assets/css/border.css'
import '../renderer/assets/font/fonthei.css'
import global_ from'../renderer/assets/js/global'
Vue.config.productionTip = false
Vue.prototype.GLOBAL = global_;

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
