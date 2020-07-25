export default [
  {
    path: "/",
    component: () => import("../../pages/Home"),
  },
  {
    path: "/about",
    component: () => import("../../pages/About"),
  },
  {
    path: "/contact",
    component: () => import("../../pages/Contact"),
  },
  {
    path: "*",
    redirect: "/",
  },
];
