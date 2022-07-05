import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainLayout from "@/views/MainLayout.vue";
//Admin pages

import AdminLayout from "@/views/admin/Index.vue";

import AdminLogin from "@/views/admin/Login/Index.vue";
import AdminMainLayout from "@/views/admin/MainLayout/Index.vue";
import AdminDashboardLayout from "@/views/admin/MainLayout/Dashboard/Index.vue";
// import AppointmentsLayout from "@/views/admin/MainLayout/Dashboard/Appointments.vue";

import ClientLayout from "@/views/client/Index.vue";

import ClientLogin from "@/views/client/Login/Index.vue";
import ClientRegistration from "@/views/client/Registration/Index.vue";
import ClientMainLayout from "@/views/client/MainLayout/Index.vue";
import ClientDashboardLayout from "@/views/client/MainLayout/Dashboard/Index.vue";

import CoachLayout from "@/views/coach/Index.vue";

import CoachLogin from "@/views/coach/Login/Index.vue";
import CoachRegistration from "@/views/coach/Registration/Index.vue";
import CoachMainLayout from "@/views/coach/MainLayout/Index.vue";
import CoachDashboardLayout from "@/views/coach/MainLayout/Dashboard/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main Layout",
    component: MainLayout,
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
        path: "home",
        name: "Admin Main Layout",
        component: AdminMainLayout,
        children: [
          {
            path: "dashboard",
            name: "Admin Dashboard",
            component: AdminDashboardLayout,
          },
          // {
          //   path: "appointments",
          //   name: "Appointments",
          //   component: AppointmentsLayout,
          // },
        ],
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
        path: "registration",
        name: "Client Registration",
        component: ClientRegistration,
      },
      {
        path: "home",
        name: "Client Main Layout",
        component: ClientMainLayout,
        children: [
          {
            path: "dashboard",
            name: "Client Dashboard",
            component: ClientDashboardLayout,
          },
        ],
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
        path: "registration",
        name: "Coach Registration",
        component: CoachRegistration,
      },
      {
        path: "home",
        name: "Coach Main Layout",
        component: CoachMainLayout,
        children: [
          {
            path: "dashboard",
            name: "Coach Dashboard",
            component: CoachDashboardLayout,
          },
        ],
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
