<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container">
      <div class="col-md-3">
        <search></search>
      </div>
      <div class="col-md-9">
        <div class="row">
          <carousel></carousel>
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
    Carousel,
    Product,
    'app-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
