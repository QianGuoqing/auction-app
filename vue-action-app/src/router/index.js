import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/home.vue'
import ProductDetail from '../components/product-detail/product-detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:productName',
      name: 'product',
      component: ProductDetail
    }
  ]
})
