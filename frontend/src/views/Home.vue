<script>
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  data(){
    return{
      isLoading: true,
      news: []
    }
  },
  async mounted(){
    this.news = await this.fetchAllNews()
    this.isLoading = false
  },
  methods:{
    ...mapActions(['fetchAllNews'])
  }
}
</script>

<template lang="pug">
div
  h1 Hello Welcome to News Lesson
  h2 All News
  p(v-if="isLoading") Please wait...
  .news(v-else)
    h3 {{news.length}} news written
    div(v-for="n in news")
      h4 Student: {{n.student.name}}
      p News Text: {{n.newsText}}
</template>
