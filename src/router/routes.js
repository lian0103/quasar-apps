const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "info", component: () => import("src/pages/Info.vue") },
      { path: "edit", component: () => import("pages/SpendEdit.vue") },
    ],
  },
  {
    path: "/signup",
    component: () => import("layouts/SignLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Signup.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
