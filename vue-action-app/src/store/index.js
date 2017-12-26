import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: '第一个商品',
        price: 1.99,
        rating: 3.5,
        desc: '这是第一个商品，Vue实战创建的',
        categories: ['电子产品', '硬件']
      },
      {
        id: 2,
        title: '第二个商品',
        price: 2.99,
        rating: 4.5,
        desc: '这是第二个商品，Vue实战创建的',
        categories: ['电子产品', '硬件']
      },
      {
        id: 3,
        title: '第三个商品',
        price: 3.99,
        rating: 1.5,
        desc: '这是第三个商品，Vue实战创建的',
        categories: ['电子产品', '硬件']
      },
      {
        id: 4,
        title: '第四个商品',
        price: 4.99,
        rating: 2.5,
        desc: '这是第四个商品，Vue实战创建的',
        categories: ['电子产品', '硬件']
      },
      {
        id: 5,
        title: '第五个商品',
        price: 5.99,
        rating: 3.5,
        desc: '这是第五个商品，Vue实战创建的',
        categories: ['电子产品', '硬件']
      },
      {
        id: 6,
        title: '第六个商品',
        price: 6.99,
        rating: 2.5,
        desc: '这是第六个商品，Vue实战创建的',
        categories: ['电子产品', '硬件']
      }
    ]
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
})

export default store