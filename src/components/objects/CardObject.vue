<template>
  <div class="max-w-lg mx-auto p-5">
    <div
      class="bg-white dark:bg-black shadow-md dark:shadow-transparent border border-gray-200 dark:border-gray-700 rounded-lg max-w-sm mb-5"
    >
      <a href="#">
        <img class="rounded-t-lg" :src="`${cardData.imgLink}`" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="text-gray-900 dark:text-white font-bold text-2xl tracking-tight mb-2"
          >
            {{ cardData.title }}
          </h5>
        </a>
        <p class="font-normal text-gray-700 dark:text-white mb-3">
          {{ cardData.headliner }}
        </p>
        <a
          class="text-white bg-black dark:bg-white dark:text-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          :href="cardData.blogLink"
        >
          Read more
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardObject",
  props: {
    cardData: {
      type: Object,
      required: true,
      validator(value) {
        return (
          value &&
          typeof value.title === "string" &&
          typeof value.headliner === "string" &&
          typeof value.imgLink === "string" &&
          typeof value.blogLink === "string"
        );
      },
    },
  },
  mounted() {
    console.log("Image URL:", this.cardData.imgLink);
  },
};
</script>

<style scoped></style>
