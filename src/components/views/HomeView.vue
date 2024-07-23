<template>
  <div
    class="w-full min-h-screen flex items-center p-8 justify-center text-lg dark:bg-black dark:text-white"
  >
    <div class="w-1/3 flex justify-center">
      <img
        src="@/assets/home-images/HomePhoto.jpeg"
        alt="Profile Photo"
        class="rounded-full h-48 w-48 object-cover"
      />
    </div>
    <div class="w-2/3 px-6">
      <h1 class="text-3xl font-bold mb-4">
        Hey! Thanks for stopping by! &#128513;
      </h1>
      <p class="text-base">
        I'm Bryce McWhirter, a passionate developer with a love for creating
        amazing web experiences. Check out my projects and blog to learn more
        about what I do. Feel free to get in touch if you have any questions or
        just want to say hi!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Add any additional custom styling here */
</style>
