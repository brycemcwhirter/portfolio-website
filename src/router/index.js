import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/views/HomeView.vue";
import AboutView from "@/components/views/AboutView.vue";
import ProjectsView from "@/components/views/ProjectsView.vue";
import ContactView from "@/components/views/ContactView.vue";
import BlogView from "@/components/views/BlogView.vue";
import BlogPost from "@/components/objects/BlogPost.vue";

const routes = [
  { path: "/", name: "HomeView", component: HomeView },
  { path: "/about", name: "AboutView", component: AboutView },
  { path: "/projects", name: "ProjectsView", component: ProjectsView },
  { path: "/contact", name: "ContactView", component: ContactView },
  { path: "/blog", name: "BlogView", component: BlogView },
  { path: "/blog/:id", component: BlogPost, name: "blog-post" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
