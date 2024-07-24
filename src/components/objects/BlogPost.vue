<template>
  <div v-html="content" class="prose p-5"></div>
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
  name: "BlogPost",
  data() {
    return {
      content: "",
    };
  },
  created() {
    const md = new MarkdownIt();
    const blogId = this.$route.params.id;
    import(`../../data/blog/${blogId}.md`)
      .then((res) => {
        this.content = md.render(res.default);
      })
      .catch((err) => {
        console.error("Error loading markdown file:", err);
      });
  },
};
</script>

<style scoped>
/* Add any additional styles you want here */
</style>
