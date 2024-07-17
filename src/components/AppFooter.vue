<template>
  <footer>
    <p>&copy; 2024 Your Name. All rights reserved.</p>
    <div class="social-links">
      <a
        href="https://twitter.com/example"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-twitter"></i
      ></a>
      <a
        href="https://github.com/example"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-github"></i
      ></a>
      <a
        href="https://linkedin.com/in/example"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-linkedin"></i
      ></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
/* Scoped styles for AppFooter.vue */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

.social-links {
  margin-top: 1rem;
}

.social-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
  font-size: 1.5rem;
}

.social-links a:hover {
  color: #f0f0f0;
}
</style>
