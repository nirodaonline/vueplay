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

import standards from '@/data/demo-data.json';

new Vue({
  data: {
    standards: standards,
  },
  methods: {
    getStandards: function() {
      return this.standards;
    },
    getStandardById: function(id){
      for (var i=0; i < this.standards.length; i++) {
        if (this.standards[i].id === id) {
            return this.standards[i];
        }
      }
      return false;
    }
  },
  router,
  render: h => h(App),
}).$mount('#app')
