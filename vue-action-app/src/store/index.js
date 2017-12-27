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
    ],
    comments: [
      { 
        id: 1,
        productId: 1,
        timestamp: '2017-01-01 01:01:01',
        user: '张三',
        rating: 3,
        content: '东西不错'
      },
      { 
        id: 2,
        productId: 1,
        timestamp: '2017-02-02 02:02:02',
        user: '李四',
        rating: 2,
        content: '东西不错'
      },
      { 
        id: 3,
        productId: 2,
        timestamp: '2017-03-03 03:03:03',
        user: '王五',
        rating: 1,
        content: '东西不错'
      },
      { 
        id: 4,
        productId: 2,
        timestamp: '2017-04-04 04:04:04',
        user: '赵六',
        rating: 5,
        content: '东西不错'
      },
      { 
        id: 5,
        productId: 3,
        timestamp: '2017-05-05 05:05:05',
        user: '张三三',
        rating: 3,
        content: '东西不错'
      },
      { 
        id: 6,
        productId: 3,
        timestamp: '2017-06-06 06:06:06',
        user: '李四四',
        rating: 2,
        content: '东西不错'
      },
    ]
  },
  mutations: {
    addNewComment(state, payload) {
      state.comments.unshift(payload)
    }
  },
  getters: {
    newRatings(state) {
      let sum = 0
      state.comments.forEach(comment => {
        sum += comment.rating
      })
      return parseFloat((sum / state.comments.length).toFixed(2))
    }
  },
  actions: {

  }
})

export default store