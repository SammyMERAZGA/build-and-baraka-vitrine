import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
// Views
import Home from "@/views/Home.vue";
import ContactPage from "@/views/ContactPage.vue";
import Features from "@/views/Features.vue";
import FAQ from "@/views/FAQ.vue";
import LegalNotice from "@/views/LegalNotice.vue";
import CookiePolicy from "@/views/CookiePolicy.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/fonctionnalites", component: Features },
  { path: "/faq", component: FAQ },
  { path: "/contact", component: ContactPage },
  { path: "/mentions-legales", component: LegalNotice },
  { path: "/politique-cookies", component: CookiePolicy },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
