<script>
import {mapActions} from 'vuex'

export default {
  name:"Students",
  data(){
    return{
      students: [],
      isLoading: true
    }
  },
  async mounted(){
    this.students = await this.fetchStudents()
    this.isLoading = false
  },
  methods:{
    ...mapActions(['fetchStudents'])
  }
}
</script>

<template lang="pug">
div
  h1 Students
  h2 All Students
  p(v-if="isLoading") Please wait...
  .students(v-else)
    p There are {{students.length}} registered students
    ol
      li(v-for="student in students")
        a(:href="`/students/${student._id})`") {{student.name}} 
</template>