import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect:"/home"
    },
    {
      path:"/home",
      component: () => import(/*webpackChunkName: "home"*/"../views/home/home.vue")
    },
    {
      path:"/favor",
      component: () => import(/*webpackChunkName: "favor"*/"../views/favor/favor.vue")
    },
    {
      path:"/order",
      component: () => import(/*webpackChunkName: "order"*/"../views/order/order.vue")
    },
    {
      path:"/message",
      component: () => import(/*webpackChunkName: "message"*/"../views/message/message.vue")
    },
    {
      path:"/city",
      component: () => import(/*webpackChunkName: "city" */ "../views/city/city.vue"),
      meta: {
        hideTabBar: true
      }
    },
    {
      path:"/search",
      component: () => import(/*webpackChunkName: "search" */"../views/search/search.vue"),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: "/detail/:id",
      component: () => import(/*webpackChunkName: "detail" */"@/views/detail/detail.vue")
    }
  ]
})


export default router