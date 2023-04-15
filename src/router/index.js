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
  {
    path: "/help-center",
    name: "HelpCenterView",
    meta: {
      isHideHeader: true,
      isHideFooter: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "HelpCenterView" */ "../views/HelpCenterView.vue"
      ),
  },
  {
    path: "/referrals",
    name: "ReferralsView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "ReferralsView" */ "../views/ReferralsView.vue"
      ),
  },
  {
    path: "/changelog",
    name: "ChangelogView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "ChangelogView" */ "../views/ChangelogView.vue"
      ),
  },
  {
    path: "/community",
    name: "CommunityView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "CommunityView" */ "../views/CommunityView.vue"
      ),
  },
  {
    path: "/knowledgebase",
    name: "KnowledgebaseView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "KnowledgebaseView" */ "../views/KnowledgebaseView.vue"
      ),
  },
  {
    path: "/developers",
    name: "DevelopersView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "DevelopersView" */ "../views/DevelopersView.vue"
      ),
  },
  {
    path: "/blog",
    name: "BlogView",
    meta: {
      isHideHeader: false,
      isHideFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "BlogView" */ "../views/BlogView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
