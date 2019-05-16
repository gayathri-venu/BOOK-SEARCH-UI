import Vue from "vue";
import App from "./App";
import ReactiveSearch from "@appbaseio/reactivesearch-vue";

Vue.use(ReactiveSearch);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
