import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";
import "quasar/src/css/index.sass";

createApp(App).use(router).use(Quasar).mount("#app");
