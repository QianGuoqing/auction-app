<template>
  <form>
    <div class="form-group">
      <label for="productName">商品名称: </label>
      <input type="text" id="productName" placeholder="商品名称" class="form-control">
    </div>
    <div class="form-group">
      <label for="productPrice">商品价格: </label>
      <input type="text" id="productPrice" placeholder="商品价格" class="form-control">
    </div>
    <div class="form-group">
      <label for="productCategory">商品分类: </label>
      <select name="" id="productCategory" class="form-control"></select>
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary btn-block">搜索</button>
    </div>
  </form>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
form {
  text-align: left;
}
</style>