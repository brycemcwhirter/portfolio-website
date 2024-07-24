<template>
  <PageWrapper>
    <div class="flex flex-wrap">
      <CardObject
        v-for="cardData in blogPosts"
        :key="cardData.title"
        :cardData="cardData"
      />
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "../layout/PageWrapper.vue";
import CardObject from "../objects/CardObject.vue";
import blogPosts from "@/data/blog/blogPosts";

export default {
  name: "BlogView",
  components: {
    CardObject,
    PageWrapper,
  },
  data() {
    return {
      blogPosts,
    };
  },
};
</script>

<style scoped></style>
