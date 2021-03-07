import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuetify);

const vtf = new Vuetify({});

new Vue({
  router,
  vuetify: vtf,
  render: h => h(App)
}).$mount("#app");
