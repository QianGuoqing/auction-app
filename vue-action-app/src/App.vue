<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container main-content">
      <div class="col-md-3">
        <search></search>
      </div>
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Home from './components/home/home'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Search from './components/search/search'
import Carousel from './components/carousel/carousel'
import Product from './components/product/product'
export default {
  name: 'app',
  components: {
    Home,
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
