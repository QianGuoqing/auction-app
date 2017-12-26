<template>
  <div class="col-md-9">
    <div class="row">
      <app-carousel></app-carousel>
    </div>
    <div class="row">
      <product></product>
    </div>
</div>
</template>

<script>

  import Carousel from '../carousel/carousel.vue'
  import Product from '../product/product.vue'

  export default {
    components: {
      'app-carousel': Carousel,
      Product
    }
  }
</script>

<style scoped>

</style>