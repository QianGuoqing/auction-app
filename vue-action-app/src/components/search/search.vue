<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
    <FormItem label="商品名称" prop="productTitle">
      <Input v-model="formValidate.productTitle" placeholder="商品名称"></Input>
    </FormItem>
    <FormItem label="商品价格" prop="productPrice">
      <Input v-model="formValidate.productPrice" placeholder="商品价格"></Input>
    </FormItem>
    <FormItem label="商品类别" prop="productCategory">
      <Select placeholder="选择商品" v-model="formValidate.prodcutCategory">
        <Option v-for="(category, index) in product.categories" :key="index" :value="category">{{ category }}</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button type="primary" long>搜索</Button>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data () {
      return {
        product: {
          categories: ['电子产品', '教育', '图书']
        },
        formValidate: {
          productTitle: '',
          productPrice: '',
          productCategory: []
        },
        ruleValidate: {
          productTitle: [
            {
              required: true,
              message: 'The product title cannot be empty',
              trigger: 'blur'
            }
          ],
          productPrice: [
            {
              required: true,
              message: 'The product price cannot be empty',
              trigger: 'blur'
            }
          ],
          productCategory: [
            {
              required: true,
              message: 'The product category cannot be empty',
              trigger: 'blur'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
form {
  text-align: left;
}
</style>