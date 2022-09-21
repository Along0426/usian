import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/home.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, form, next) => {
  // console.log(to.path);
  // console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token")) {
    if (to.path == "/login") {
      next(form.path)
    } else {
      next()
    }
  } else {
    if (to.path == "/login") {
      next()
    } else {
      next("/login")
    }
  }
})

export default router;
