import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
// import { useWeatherStore } from "../src/stores/weather";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
