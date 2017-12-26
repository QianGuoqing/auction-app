<template>
  <div>
    <Rate :disabled="isDisable" allow-half v-model="rating"></Rate>
  </div>
</template>

<script>
  export default {
    props: {
      rating: {
        type: Number,
        default: 0
      },
      isDisable: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style scoped>

</style>