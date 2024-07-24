<template>
  <PageWrapper>
    <div class="border flex justify-center gap-14">
      <div class="w-1/2 flex justify-end">
        <img
          src="@/assets/home-images/HomePhoto.jpeg"
          alt="Profile Photo"
          class="rounded-full h-60 w-60 object-cover"
        />
      </div>
      <div class="w-1/2 flex-column justify-start">
        <h1 class="text-3xl font-bold mb-4">Hey! My name is Bryce McWhirter</h1>
        <p class="text-base">I'm a software developer based in the DFW area.</p>
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "../layout/PageWrapper.vue";
export default {
  name: "HomeView",
  components: {
    PageWrapper,
  },
};
</script>

<style scoped>
/* Add any additional custom styling here */
</style>
