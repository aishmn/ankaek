import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import router from "./routes/index";
import store from "./store/index";

Vue.config.productionTip = false;
import VueBus from "vue-bus";
Vue.use(VueBus);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
