<template>
  <div
    class="w-full flex-col items-center justify-center text-lg dark:bg-black dark:text-white"
  >
    <div class="flex flex-wrap">
      <CardObject
        v-for="cardData in projects"
        :key="cardData.title"
        :cardData="cardData"
      />
    </div>
  </div>
</template>

<script>
import CardObject from "../objects/CardObject.vue";
import projects from "@/data/portfolio/projects";

export default {
  name: "ProjectsView",
  components: {
    CardObject,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped></style>
