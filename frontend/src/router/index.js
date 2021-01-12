import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teachers from '../views/Teachers.vue'
import Students from '../views/Students.vue'
import Teacher from '../views/Teacher.vue'
import Student from '../views/Student.vue'
import CreateNews from '../views/CreateNews.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/teachers/:teacherId',
    name: 'Teacher',
    component: Teacher
  },
  {
    path:'/students/:studentId',
    name: 'Stundet',
    component: Student
  },
  {
    path:'/students/:studentId/createNews/:questionsId',
    name: 'CreateNews',
    component: CreateNews
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
