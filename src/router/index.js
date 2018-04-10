import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'index',
      component: resolve => require(["../components/index.vue"], resolve)
    },
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
    }
  ]
})
