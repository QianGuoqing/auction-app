<template>
  <div class="product">
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="输入搜索商品名" v-model="keyword">
        </div>
      </div>
    </div>
    <div v-for="product in filterdProducts" :key="product.id" class="col-md-4 col-sm-4 col-lg-4 product-item">
      <div class="thumbnail">
        <img :src="imgUrl" alt="">
        <div class="caption">
          <h4 class="pull-right">{{ product.price }}</h4>
          <h4>
            <router-link :to="{name: 'product', params: {productId: product.id}}">{{ product.title }}</router-link>
          </h4>
          <p>{{ product.desc }}</p>
        </div>
        <div>
          <stars :isDisable="true" :rating="newRatings"></stars>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState, mapGetters } from 'vuex'

  import Stars from '../stars/stars.vue'

  export default {
    data() {
      return {
        imgUrl: 'http://placehold.it/320x150',
        keyword: ''
      }
    },
    computed: {
      ...mapState([
        'products'
      ]),
      filterdProducts() {
        return this.products.filter(product => product.title.indexOf(this.keyword) >= 0)
      },
      ...mapGetters([
        'newRatings'
      ])
    },
    components: {
      Stars
    }
  }
</script>

<style scoped>
.product {
  margin-top: 40px;
}

.thumbnail {
  cursor: pointer;
  transition: all .3s;
}

.thumbnail:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px #ccc;
}

.caption h4 {
  margin-bottom: 10px;
}
</style>