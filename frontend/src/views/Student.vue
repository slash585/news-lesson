<script>
import {mapActions} from 'vuex'

export default {
  name:"Student",
  data(){
    return{
      student:{},
      isLoading: true,
      questions: []
    }
  },
  async mounted(){
    this.student = await this.fetchStudent(this.$route.params.studentId)
    this.questions = await this.fetchAllQuestions()
    console.log(this.questions)
    this.isLoading = false
  },
  methods:{
    ...mapActions(['fetchStudent','fetchAllQuestions'])
  }
}
</script>

<template lang="pug">
div
  h1 Student: {{student.name}}
  .questions
    .question(v-for="q in questions")
     div(v-for="question in q.questions")
      h6 Who: {{question.who}}
      h6 Where: {{question.where}}
      h6 When: {{question.when}}
      h6 Why: {{question.why}}
      h6 What: {{question.what}}
      h6 How: {{question.how}}
      a(:href="`/students/${student._id}/createNews/${q._id}`") Create News
  .news
    .n(v-for="news in student.news")
      p {{news.newsText}}
      
      
        
</template>

<style scoped>
.questions{
  display: flex;
  flex-direction: row;
}

.question{
  flex: 0.33;
  border: 1px solid black;
  border-radius: 5px;
  margin: 3px;
  color: red;
}

.news{
  display: flex;
  flex-direction: column;
}

.n{
  flex: 0.33;
  border: 1px solid black;
  border-radius: 5px;
  margin: 25px 3px 3px 3px;
  color: red;
}
</style>