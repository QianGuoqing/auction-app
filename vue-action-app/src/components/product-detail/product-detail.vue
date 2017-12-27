<template>
  <div class="col-md-9">
    <div class="thumbnail">
      <img src="http://placehold.it/820x230" alt="">
      <div>
        <h4 class="pull-right">{{ products[productId].price }}元</h4>
        <h4>{{ products[productId].title }}</h4>
        <p>{{ products[productId].desc }}</p>
      </div>
      <div>
        <p class="pull-right">{{ comments.length }}</p>
        <p>
          <stars :rating="products[productId].rating" :is-disable="true"></stars>
        </p>
      </div>
    </div>

    <div class="well">
      <div class="row" v-for="comment in comments" :key="comment.id">
        <hr>
        <div class="col-md-12">
          <stars :rating="comment.rating" :is-disable="true"></stars>
          <span>{{ comment.user }}</span>
          <span class="pull-right">{{ comment.timestamp }}</span>
          <p></p>
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState } from 'vuex'
  import Stars from '../stars/stars.vue'

  export default {
    computed: {
      ...mapState([
        'products',
        'comments'
      ]),
      productId() {
        return this.$route.params.productId
      }
    },
    components: {
      Stars
    }
  }
</script>

<style scoped>

</style>