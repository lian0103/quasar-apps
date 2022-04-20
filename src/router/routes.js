const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Dashbord.vue") },
      { path: "user", component: () => import("src/pages/User.vue") },
      { path: "role", component: () => import("src/pages/Role.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
