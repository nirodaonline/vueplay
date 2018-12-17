import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueFuse from 'vue-fuse'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(VueFuse);

Vue.config.productionTip = false

// Vue.prototype.$search = function (term, list, options) {
//   return new Promise(function (resolve, reject) {
//     var run = new Fuse(list, options)
//     var results = run.search(term)
//     resolve(results)
//   })
// }
// export default { VueFuse }


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
