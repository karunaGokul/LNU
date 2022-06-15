import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

//Admin pages

import AdminLayout from "@/views/admin/Index.vue";
import AdminDashboardLayout from "@/views/admin/Dashboard/Index.vue";
import AdminLogin from "@/views/admin/Login/Index.vue";

import ClientLayout from "@/views/client/Index.vue";
import ClientDashboardLayout from "@/views/client/Dashboard/Index.vue";
import ClientLogin from "@/views/client/Login/Index.vue";

import CoachLayout from "@/views/coach/Index.vue";
import CoachDashboardLayout from "@/views/coach/Dashboard/Index.vue";
import CoachLogin from "@/views/coach/Login/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminLayout,
    children: [
      {
        path: "login",
        name: "Admin Login",
        component: AdminLogin,
      },
      {
        path: "dashboard",
        name: "Admin Dashboard",
        component: AdminDashboardLayout,
      },
    ],
  },
  {
    path: "/client",
    name: "Client",
    component: ClientLayout,
    children: [
      {
        path: "login",
        name: "Client Login",
        component: ClientLogin,
      },
      {
        path: "dashboard",
        name: "Client Dashboard",
        component: ClientDashboardLayout,
      },
    ],
  },
  {
    path: "/coach",
    name: "Coach",
    component: CoachLayout,
    children: [
      {
        path: "login",
        name: "Coach Login",
        component: CoachLogin,
      },
      {
        path: "dashboard",
        name: "Coach Dashboard",
        component: CoachDashboardLayout,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
/*
  {
        path: 'login',
        name: 'Client Login',
        component: ClientLogin
      },
      {
        path: 'coach-login',
        name: 'Coach Login',
        component: CoachLogin
      },
*/
