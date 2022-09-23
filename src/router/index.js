import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/login.vue";
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "index",
    redirect: "/home",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/home.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/member",
        name: "member",
        component: () => import("../views/member/member.vue"),
        meta: {
          title: "会员管理"
        }
      },
      {
        path: "/supplier",
        name: "supplier",
        component: () => import("../views/supplier/supplier.vue"),
        meta: {
          title: "供应商管理"
        }
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods/goods.vue"),
        meta: {
          title: "商品管理"
        }
      },
      {
        path: "/staff",
        name: "staff",
        component: () => import("../views/staff/staff.vue"),
        meta: {
          title: "员工管理"
        }
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, form, next) => {
//   // 如果本地有 token 的话
//   if (localStorage.getItem("token")) {
//     // 如果要去的页面为 登录页面
//     if (to.path == "/login") {
//       // 从那里来，回哪里去
//       next(form.path)
//       // 如果不为 登录页面
//     } else {
//       // 放行
//       next()
//     }
//     // 如果本地没有 token
//   } else {
//     // 如果要去的页面为登录页面
//     if (to.path == "/login") {
//       // 放行
//       next()
//       // 如果不是去 登录页面
//     } else {
//       // 跳转至登录页面
//       next("/login")
//     }
//   }
// })

router.beforeEach(async (to, form, next) => {
  // 获取 token 信息
  const token = store.getters.token
  // 有 token 的话
  if (token) {
    // 如果要求登录页面
    if (to.path === "/login") {
      // 从哪来，回哪去
      next(form.path)
      // 如果不是去登录页面
    } else {
      // 获取用户信息
      let userinfo = store.getters.userinfo
      // 判断 userinfo 类型，如果是对象，转换为字符串。如果不是对象，不做改变
      userinfo = typeof userinfo === "object" ? JSON.stringify(userinfo) : userinfo
      // 如果没有用户信息
      if (userinfo === "{}" || userinfo === "") {
        // 请求用户信息并获取
        const response = await store.dispatch("DisSetUserInfo")
        // 如果用户信息请求成功
        if (response) {
          // 正常跳转
          next()
          // 用户信息没有请求成功
        } else {
          // 跳转至登录页面
          next("/login")
        }
        // 有用户信息
      } else {
        // 正常跳转
        next()
      }
    }
    // 没有token
  } else {
    // 如果要求登录页面
    if (to.path === "/login") {
      // 正常跳转
      next()
      // 如果不是去跳转页面
    } else {
      // 跳转至登录页面
      next("/login")
    }
  }
})

export default router;
