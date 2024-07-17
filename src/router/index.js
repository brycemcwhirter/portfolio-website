import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/projects", component: ProjectsView },
    { path: "/contact", component: ContactView },
  ],
});
