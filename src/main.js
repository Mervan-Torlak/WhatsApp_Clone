import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";

import vue3GoogleLogin from "vue3-google-login";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
  clientId: "615631514070-akmi704t1oa9ns9mr81gtbq6v56ktdko.apps.googleusercontent.com",
});

app.mount("#app");
