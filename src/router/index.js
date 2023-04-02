import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CareersView from "../views/CareersView.vue";
import ContactView from "../views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
  },
  {
    path: "/about-us",
    name: "AboutView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/careers",
    name: "CareersView",
    component: CareersView,
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
  },
  {
    path: "/contact-us",
    name: "ContactView",
    component: ContactView,
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
  },
  {
    path: "/app-display-page",
    name: "AppDisplayPage",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "appDisplayPage" */ "../views/AppDisplayPage.vue"
      ),
  },
  {
    path: "/roadmap",
    name: "RoadmapView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "raodmap" */ "../views/RoadmapView.vue"),
  },
  {
    path: "/pricing",
    name: "PricingView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "pricing" */ "../views/PricingView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
