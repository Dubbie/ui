import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/components/accordion",
      name: "components.accordion",
      component: () => import("../views/components/AccordionView.vue"),
    },
    {
      path: "/components/alert",
      name: "components.alert",
      component: () => import("../views/components/AlertView.vue"),
    },
    {
      path: "/components/button",
      name: "components.button",
      component: () => import("../views/components/ButtonView.vue"),
    },
    {
      path: "/components/checkbox",
      name: "components.checkbox",
      component: () => import("../views/components/CheckboxView.vue"),
    },
    {
      path: "/components/input",
      name: "components.input",
      component: () => import("../views/components/InputView.vue"),
    },
    {
      path: "/components/label",
      name: "components.label",
      component: () => import("../views/components/LabelView.vue"),
    },
  ],
});

export default router;
