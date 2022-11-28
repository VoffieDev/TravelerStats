import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";

createApp(App).use(router).use(Quasar).mount("#app");
