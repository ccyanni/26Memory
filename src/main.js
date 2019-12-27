import Vue from "vue";
import App from "@/components/App.vue";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import "bulma/css/bulma.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
