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
          <stars :rating="newRatings" :is-disable="true"></stars>
        </p>
      </div>
    </div>

    <div class="well">
      <section class="comment-section">
        <div class="form-group">
          <button class="btn btn-success" @click="isDisplay = true">发表评论</button>
        </div>
        <div class="comment-wrapper" v-if="isDisplay">
          <div>
            <Rate allow-half v-model="userRating"></Rate>
          </div>
          <div class="form-group">
            <textarea v-model="userComment" rows="6" class="form-control"></textarea>
          </div>
          <button class="btn btn-default" @click="addNewComment">提交</button>
        </div>
      </section>
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

  import { mapState, mapMutations, mapGetters } from 'vuex'
  import Stars from '../stars/stars.vue'

  export default {
    data () {
      return {
        userRating: 0,
        userComment: '',
        isDisplay: false
      }
    },
    methods: {
      addNewComment() {
        this.$store.commit('addNewComment', {
          id: Math.random() * 9999,
          productId: 1,
          timestamp: new Date().toLocaleTimeString(),
          user: '匿名',
          rating: this.userRating,
          content: this.userComment
        })

        this.userRating = 0
        this.userComment = ''
        this.isDisplay = false
      }
    },
    computed: {
      ...mapState([
        'products',
        'comments'
      ]),
      ...mapGetters([
        'newRatings'
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
.comment-section {
  margin-bottom: 20px;
}
</style>