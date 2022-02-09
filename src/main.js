import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

Vue.component('v-icon', Icon)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
