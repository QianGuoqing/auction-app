<template>
  <Carousel autoplay v-model="current" loop>
    <CarouselItem>
      <div class="demo-carousel">
        <img class="slide-image" src="http://placehold.it/800x300" alt="">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img class="slide-image" src="http://placehold.it/800x300" alt="">
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img class="slide-image" src="http://placehold.it/800x300" alt="">
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    data () {
      return {
        current: 0
      }
    }
  }
</script>

<style scoped>
.demo-carousel {
  width: 100%;
}

.demo-carousel img {
  width: 100%;
}
</style>