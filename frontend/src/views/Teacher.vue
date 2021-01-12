<script>
import {mapActions} from 'vuex'
export default {
  name:"Teacher",
  data(){
    return{
      isLoading : true,
      teacher : {},
      who: "",
      where: "",
      why: "",
      when: "",
      what: "",
      how: "",
      news: []
    }
  },
  async mounted(){
    await this.updateTeacher()
    this.news = await this.fetchAllNews()
    console.log(this.news)
    this.isLoading = false    
  },
  methods: {
    ...mapActions(['fetchTeacher','createQuestions','fetchAllNews']),
    async createQuestionsAndUpdateTeacher(who,where,when,why,what,how){
      await this.createQuestions({teacherId:this.teacher._id,who:who,where:where,when:when,why:why,what:what,how:how})
      await this.updateTeacher()
    },
    async updateTeacher(){
      this.teacher = await this.fetchTeacher(this.$route.params.teacherId)
    }
  }
}
</script>

<template lang="pug">
div
  h1 {{teacher.name}}
  h2 Questions
  div.questions(v-for="questions in teacher.whQuestions")
    p Questions Id: {{questions._id}}
    div(v-for="q in questions.questions")
      h6 Who: {{q.who}}
      h6 Where: {{q.where}}
      h6 When: {{q.when}}
      h6 Why: {{q.why}}
      h6 What: {{q.what}}
      h6 How: {{q.how}}
  .createQuestions 
    h3 Create Questions
    form 
      input(v-model="who" placeholder="who")
      input(v-model="where" placeholder="where")
      input(v-model="when" placeholder="when")
      input(v-model="why" placeholder="why")
      input(v-model="what" placeholder="what")
      input(v-model="how" placeholder="how")
      button(@click="createQuestionsAndUpdateTeacher(who,where,when,why,what,how)") Create
      hr
  .viewNews(v-for="n in news")
    h6 {{n.student.name}}
    p {{n.newsText}}
    a(:href="`/teachers/${teacher._id}/${n._id}/viewNews`") View News
    
</template>