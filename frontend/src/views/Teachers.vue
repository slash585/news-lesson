<script>
import {mapActions} from 'vuex'

export default {
  name:"Teachers",
  data(){
    return{
      isLoading : true,
      teachers: []
    }
  },
  async mounted(){
    this.teachers = await this.fetchTeachers()
    this.isLoading = false
    console.log(this.teachers)
  },
  methods: {
    ...mapActions(['fetchTeachers'])
  }
}
</script>

<template lang="pug">
div
  h1 Teachers
  h2 All Teachers
  p(v-if="isLoading") Please wait...
  .teachers(v-else)
    h3 There are {{teachers.length}} registered teachers
    ol
      li(v-for="teacher in teachers")
        a(:href="`/teachers/${teacher._id}`") {{teacher.name}}




</template>