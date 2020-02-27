import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

//style
import './assets/style/reset.css'
import './assets/style/border.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
