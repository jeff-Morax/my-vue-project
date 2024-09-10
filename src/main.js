// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import MyModal from "./components/MyModal.vue"; // 引入新的組件名稱

const app = createApp(App);
app.component("MyModal", MyModal); // 註冊組件
app.mount("#app");
