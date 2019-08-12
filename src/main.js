import Vue from 'vue'
import ElementUI from 'element-ui'   //eleUI组件库
import 'element-ui/lib/theme-chalk/index.css'  //eleUI css
import axios from 'axios'     //http请求

import App from './App.vue'   //组件入口
import router from './router'    //路由

Vue.config.productionTip = false;   //生产模式false即debug模式

//注册插件到Vue全局根实例
Vue.use(ElementUI);
Vue.prototype.axios = axios;

//Vue根实例  实例化
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
