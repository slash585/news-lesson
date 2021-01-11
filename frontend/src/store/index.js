import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

axios.defaults.baseURL="http://localhost:3000"

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchAllNews(){
      const request = await axios.get('/news')
      return request.data
    },
    async fetchTeachers(){
      const request = await axios.get('/teachers')
      return request.data
    },
    async fetchTeacher(ctx, teacherId){
      const request = await axios.get(`/teachers/${teacherId}`)
      return request.data
    },
    async createQuestions(ctx,{teacherId,who,where,when,why,what,how}){
      const request = await axios.post(`/teachers/${teacherId}/createQuestions`,{
        who,where,when,why,what,how
      })
      return request.data
    },
    async fetchStudents(){
      const request = await axios.get('/students')
      return request.data
    },
    async fetchStudent(ctx, studentId){
      const request = await axios.get(`/students/${studentId}`)
      return request.data
    },
    async fetchAllQuestions(){
      const request = await axios.get(`/questions`)
      return request.data
    }
  }
})
