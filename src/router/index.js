import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: "",
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      name: 'index',
      component: resolve => require(["../components/index.vue"], resolve)
    },
    {
      path: '/list',
      name: 'list',
      component: resolve => require(["../components/list.vue"], resolve),
      redirect: "/wealth",
      children: [

        {
          path: '/wealth',
          name: 'wealth',
          component: resolve => require(["../components/wealth.vue"], resolve)
        },
        {
          path: '/product',
          name: 'product',
          component: resolve => require(["../components/product.vue"], resolve)
        },
        {
          path: '/login',
          name: 'login',
          component: resolve => require(["../components/login.vue"], resolve)
        },
        {
          path: '/loveValue',
          name: 'loveValue',
          component: resolve => require(["../components/loveValue.vue"], resolve)
        },
        {
          path: '/trade',
          name: 'trade',
          component: resolve => require(["../components/trade.vue"], resolve)
        }],
        meta: {  auth: true}
    }]
    
})
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const login=window.localStorage.getItem('logined');
    if (!login) {
      alert("需要登录");
      next({
        path: '/index',
        query: { redirect: to.fullPath }
      })
    } else {
      // console.log()
      next()
    }
  } else {
    
    next() // 确保一定要调用 next()
  }
})

export default router;