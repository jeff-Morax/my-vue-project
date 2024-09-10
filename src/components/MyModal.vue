<!-- src/components/MyModal.vue -->
<template>
  <div class="modal">
    <h2>This is a modal!</h2>
  </div>
</template>

<script>
export default {
  name: "MyModal", // 更改為多個單詞
};
</script>

<style scoped>
.modal {
  /* Modal styles */
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 20px;
  text-align: center;
}

h2 {
  margin-top: 0;
}
</style>
