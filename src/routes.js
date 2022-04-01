import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import 

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/:path(.*)", component: NotFound },
];
