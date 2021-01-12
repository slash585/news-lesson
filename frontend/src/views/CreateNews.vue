<script>
import {mapActions} from 'vuex'

export default {
    name:"CreateNews",
    data(){
        return{
            question:{},
            newsText: ""
        }
    },
    async mounted(){
        this.question = await this.fethQuestion(this.$route.params.questionsId)
        console.log(this.question._id)
    },
    methods:{
        ...mapActions(['fethQuestion','createNews']),
        async writeNews(newsText){
            await this.createNews({studentId:this.$route.params.studentId,questionsId:this.question._id,newsText:newsText})
            alert(`${newsText} created.`)
        }
    }
}
</script>

<template lang="pug">
h1 Create News
 .questions(v-for="q in question.questions")
    h6 Who: {{q.who}}
    h6 Where: {{q.where}}
    h6 When: {{q.when}}
    h6 Why: {{q.why}}
    h6 What: {{q.what}}
    h6 How: {{q.how}}
    input(placeholder="News Text" v-model="newsText")
    button(@click="writeNews(newsText)") Write News
    hr
</template>

