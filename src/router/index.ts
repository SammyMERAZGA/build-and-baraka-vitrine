import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
// Views
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Features from "@/views/Features.vue";
import FAQ from "@/views/FAQ.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/features", component: Features },
  { path: "/faq", component: FAQ },
  { path: "/contact", component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
