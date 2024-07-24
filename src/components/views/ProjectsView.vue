<template>
  <PageWrapper>
    <div class="flex flex-wrap">
      <CardObject
        v-for="cardData in projects"
        :key="cardData.title"
        :cardData="cardData"
      />
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "../layout/PageWrapper.vue";
import CardObject from "../objects/CardObject.vue";
import projects from "@/data/portfolio/projects";

export default {
  name: "ProjectsView",
  components: {
    CardObject,
    PageWrapper,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped></style>
