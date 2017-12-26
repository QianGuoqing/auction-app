<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container main-content">
      <div class="col-md-3">
        <search></search>
      </div>
      <div class="col-md-9">
        <div class="row">
          <app-carousel></app-carousel>
        </div>
        <div class="row">
          <product></product>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Search from './components/search/search'
import Carousel from './components/carousel/carousel'
import Product from './components/product/product'
export default {
  name: 'app',
  components: {
    NavBar,
    Search,
    Product,
    'app-carousel': Carousel,
    'app-footer': Footer
  }
}
</script>

<style>
.main-content {
  margin-top: 80px;
}
</style>
