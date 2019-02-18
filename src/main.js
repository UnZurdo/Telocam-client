import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

Vue.prototype.$http = Axios;

import VueSingleSelect from "vue-single-select";
import InputTag from "vue-input-tag";
import VueNumberInput from "@chenfengyuan/vue-number-input";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import Suggestions from "v-suggestions";
import "v-suggestions/dist/v-suggestions.css"; // you can import the stylesheets also (optional)

Vue.use(Suggestions);
Vue.use(VueSidebarMenu);

Vue.component("vue-single-select", VueSingleSelect);
Vue.component("input-tag", InputTag);
Vue.component(VueNumberInput.name, VueNumberInput);

const token = localStorage.getItem("user-token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
