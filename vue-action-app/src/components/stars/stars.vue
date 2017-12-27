<template>
  <div>
    <Rate :disabled="isDisable" allow-half v-model="rating"></Rate>
    <span>{{ rating }}星</span>
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