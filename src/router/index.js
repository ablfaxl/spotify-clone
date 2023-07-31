import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import LibraryView from "../views/LibraryView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/search",
      component: SearchView,
    },
    {
      path: "/library",
      component: LibraryView,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

export default router;
