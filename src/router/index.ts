import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import store from "@/store";

Vue.use(VueRouter);

let routes: Array<RouteConfig> = [];
const coachRoutes: Array<RouteConfig> = [
  {
    path: "/coach",
    name: "Coach",
    component: () => import("@/views/coach/Index.vue"),
    meta: { anonymous: true },
    children: [
      {
        path: "login",
        name: "Coach Login",
        component: () => import("@/views/Login.vue"),
        meta: { anonymous: true },
      },
      {
        path: "registration",
        name: "Coach Registration",
        component: () => import("@/views/coach/Registration/Index.vue"),
        meta: { anonymous: true },
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
          {
            path: "profile",
            name: "Coach Profile",
            component: () =>
              import("@/views/coach/MainLayout/Profile/Index.vue"),
          },
          {
            path: "appointments",
            name: "Coach Appointment",
            component: () =>
              import("@/views/coach/MainLayout/Appointment/Index.vue"),
          },
          {
            path: "messages",
            name: "Coach message",
            component: () =>
              import("@/views/coach/MainLayout/Message/Index.vue"),
          },
          {
            path: "support",
            name: "coach support",
            component: () =>
              import("@/views/coach/MainLayout/Support/Index.vue"),
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
    meta: { anonymous: true },
    children: [
      {
        path: "login",
        name: "Admin Login",
        component: () => import("@/views/Login.vue"),
        meta: { anonymous: true },
      },
      {
        path: "home",
        name: "Admin Main Layout",
        component: () => import("@/views/admin/MainLayout/Index.vue"),
        meta: { anonymous: true },
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
            path: "coachs",
            name: "CoachDetails",
            component: () =>
              import("@/views/admin/MainLayout/CoachDetails/Index.vue"),
          },
          {
            path: "clients",
            name: "ClientDetails",
            component: () =>
              import("@/views/admin/MainLayout/ClientDetails/Index.vue"),
          },
          {
            path: "support",
            name: "Admin support",
            component: () =>
              import("@/views/admin/MainLayout/Support/Index.vue"),
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
        component: () => import("@/views/Login.vue"),
        meta: { anonymous: true },
      },
      {
        path: "registration",
        name: "Client Registration",
        component: () => import("@/views/client/Registration/Index.vue"),
        meta: { anonymous: true },
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
            path: "/client/home/dashboard/:id",
            name: "Explore",
            component: () =>
              import("@/views/client/MainLayout/Dashboard/components/Explore.vue"),
          },
          {
            path: "questionnaire",
            name: "Questionnaire",
            component: () => import("@/views/client/Registration/Questionnaire.vue"),
            meta: { anonymous: true },
          },
          {
            path: "profile",
            name: "Client Profile",
            component: () =>
              import("@/views/client/MainLayout/Profile/Index.vue"),
          },
          {
            path: "appointments",
            name: "Client Appointments",
            component: () =>
              import("@/views/client/MainLayout/Appointments/Index.vue"),
          },
          {
            path: "/client/home/appointments/:id",
            name: "Book Appointment",
            component: () =>
              import(
                "@/views/client/MainLayout/Appointments/component/BookAppointments.vue"
              ),
          },
          {
            path: "payment",
            name: "Client Payment",
            component: () =>
              import("@/views/client/MainLayout/Payment/Index.vue"),
          },
          {
            path: "journal",
            name: "Client Journal",
            component: () =>
              import("@/views/client/MainLayout/MyJournal/Index.vue"),
          },
          {
            path: "messages",
            name: "Client Messages",
            component: () =>
              import("@/views/client/MainLayout/Message/Index.vue"),
          },
          {
            path: "newsletter",
            name: "Client Newsletter",
            component: () =>
              import("@/views/client/MainLayout/Newsletter/Index.vue"),
          },
          {
            path: "support",
            name: "Client support",
            component: () =>
              import("@/views/client/MainLayout/Support/Index.vue"),
          },
          {
            path: "success",
            name: "Success",
            component: () =>
              import("@/views/client/MainLayout/PaymentInfo/Success.vue"),
          },
          {
            path: "cancel",
            name: "Cancel",
            component: () =>
              import("@/views/client/MainLayout/PaymentInfo/Cancel.vue"),
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
  let path = to.path.split("/")[1];
  if (path.includes("client"))
    document.documentElement.setAttribute("data-theme", "client-theme");
  else if (path.includes("coach"))
    document.documentElement.setAttribute("data-theme", "coach-theme");
  else document.documentElement.setAttribute("data-theme", "admin-theme");

  store.dispatch("counselingProgram");

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
