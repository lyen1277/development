import "./styles/index.less";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { iphoneSpringback } from "./utils/iphoneSpringback";
import fastclick from "fastclick";
import "amfe-flexible";
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      fastclick.attach(document.body);
      // iphone 回弹时防止点击穿透
      iphoneSpringback();
    },
    false
  );
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
