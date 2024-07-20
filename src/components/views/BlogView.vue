<template>
  <div
    class="w-full flex-col items-center justify-center text-lg dark:bg-black dark:text-white"
  >
    <div class="flex flex-wrap">
      <CardObject
        v-for="cardData in blogPosts"
        :key="cardData.title"
        :cardData="cardData"
      />
    </div>
  </div>
</template>

<script>
import CardObject from "../objects/CardObject.vue";
import blogPosts from "@/blog/blogPosts";

export default {
  name: "BlogView",
  components: {
    CardObject,
  },
  data() {
    return {
      blogPosts,
    };
  },
};
</script>

<style scoped></style>
