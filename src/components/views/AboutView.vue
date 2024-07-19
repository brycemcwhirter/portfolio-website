<template>
  <div
    class="w-full h-16 flex items-center justify-center text-lg dark:bg-black dark:text-white"
  >
    <CardObject />
  </div>
</template>

<script>
import CardObject from "../objects/CardObject.vue";

export default {
  name: "AboutView",
  components: {
    CardObject,
  },
};
</script>

<style scoped></style>
