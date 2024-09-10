<!-- src/App.vue -->
<template>
  <div id="app">
    <MyHome />
    <!-- 使用新的組件名稱 -->
  </div>
</template>

<script>
import MyHome from "./components/MyHome.vue"; // 引入新的組件名稱

export default {
  name: "App",
  components: {
    MyHome, // 註冊新的組件
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}
</style>
