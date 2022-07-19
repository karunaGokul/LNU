import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import axios from "axios";
import store from "@/store";

Vue.use(VueRouter);

let routes: Array<RouteConfig> = [];
const coachRoutes: Array<RouteConfig> = [
  {
    path: "/coach",
    name: "Coach",
    component: () => import("@/views/coach/Index.vue"),
    children: [
      {
        path: "login",
        name: "Coach Login",
        component: () => import("@/views/coach/Login/Index.vue"),
      },
      {
        path: "registration",
        name: "Coach Registration",
        component: () => import("@/views/coach/Registration/Index.vue"),
      },
      {
        path: "home",
        name: "Coach Main Layout",
        component: () => import("@/views/coach/MainLayout/Index.vue"),
        children: [
          {
            path: "dashboard",
            name: "Coach Dashboard",
            component: () =>
              import("@/views/coach/MainLayout/Dashboard/Index.vue"),
          },
        ],
      },
    ],
  },
];

const adminRoutes: Array<RouteConfig> = [
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/admin/Index.vue"),
    children: [
      {
        path: "login",
        name: "Admin Login",
        component: () => import("@/views/admin/Login/Index.vue"),
      },
      {
        path: "home",
        name: "Admin Main Layout",
        component: () => import("@/views/admin/MainLayout/Index.vue"),
        children: [
          {
            path: "dashboard",
            name: "Admin Dashboard",
            component: () =>
              import("@/views/admin/MainLayout/Dashboard/Index.vue"),
          },
          {
            path: "appointments",
            name: "Appointments",
            component: () =>
              import("@/views/admin/MainLayout/Appointments/Index.vue"),
          },
          {
            path: "coachDetails",
            name: "CoachDetails",
            component: () =>
              import("@/views/admin/MainLayout/CoachDetails/Index.vue"),
          },
          {
            path: "clientDetails",
            name: "ClientDetails",
            component: () =>
              import("@/views/admin/MainLayout/ClientDetails/Index.vue"),
          },
        ],
      },
    ],
  },
];

const clientRoutes: Array<RouteConfig> = [
  {
    path: "/client",
    name: "Client",
    component: () => import("@/views/client/Index.vue"),
    meta: { anonymous: true },
    redirect: {
      name: "Client Login",
    },
    children: [
      {
        path: "login",
        name: "Client Login",
        component: () => import("@/views/client/Login/Index.vue"),
        meta: { anonymous: true }
      },
      {
        path: "registration",
        name: "Client Registration",
        component: () => import("@/views/client/Registration/Index.vue"),
        meta: { anonymous: true }
      },
      {
        path: "home",
        name: "Client Main Layout",
        component: () => import("@/views/client/MainLayout/Index.vue"),
        children: [
          {
            path: "dashboard",
            name: "Client Dashboard",
            component: () =>
              import("@/views/client/MainLayout/Dashboard/Index.vue"),
          },
          {
            path: "profile",
            name: "Client Profile",
            component: () => import("@/views/client/MainLayout/Profile.vue"),
          },
          {
            path: "appointments",
            name: "Client Appointments",
            component: () =>
              import("@/views/client/MainLayout/Appointments/Index.vue"),
          },
          {
            path: "payment",
            name: "Client Payment",
            component: () =>
            import("@/views/client/MainLayout/Payment.vue"),
          },
          {
            path: "journal",
            name: "Client Journal",
            component: () =>
              import("@/views/client/MainLayout/Journal/Index.vue"),
          },
        ],
      },
    ],
  },
];

const defaultRoutes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "Client",
    },
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("@/views/PageNotFound.vue"),
  },
];

routes = routes.concat(adminRoutes);
routes = routes.concat(coachRoutes);
routes = routes.concat(clientRoutes);
routes = routes.concat(defaultRoutes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => !record.meta.anonymous)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/client/login");
  } else {
    next();
  }
});
