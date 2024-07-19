<template>
  <div
    class="w-full h-16 flex items-center justify-center text-lg dark:bg-black dark:text-white"
  >
    <h1>Blog</h1>
    <CardObject />
  </div>
</template>

<script>
import CardObject from "../objects/CardObject.vue";

export default {
  name: "BlogView",
  components: {
    CardObject,
  },
};
</script>

<style scoped></style>
