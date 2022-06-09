/*
 * @Descripttion:
 * @version:
 * @Author: yuhj
 * @Date: 2022-05-30 09:11:31
 */
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
