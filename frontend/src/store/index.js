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
    }
  }
})
