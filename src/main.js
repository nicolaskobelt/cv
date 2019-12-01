import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueResizeText from 'vue-resize-text';

Vue.config.productionTip = false

Vue.use(VueResizeText);

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
}).$mount('#app')
