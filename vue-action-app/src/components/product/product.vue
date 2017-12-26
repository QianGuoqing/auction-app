<template>
  <div class="product">
    <div v-for="product in products" :key="product.id" class="col-md-4 col-sm-4 col-lg-4 product-item">
      <div class="thumbnail">
        <img :src="imgUrl" alt="">
        <div class="caption">
          <h4 class="pull-right">{{ product.price }}</h4>
          <h4><a href="#">{{ product.title }}</a></h4>
          <p>{{ product.desc }}</p>
        </div>
        <div>
          <stars :isDisable="true" :rating="product.rating"></stars>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

  import Stars from '../stars/stars.vue'

  export default {
    data() {
      return {
        imgUrl: 'http://placehold.it/320x150'
      }
    },
    computed: {
      ...mapState([
        'products'
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
</style>