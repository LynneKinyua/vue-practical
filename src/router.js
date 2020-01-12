import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/Todo.vue'
import About from './components/About.vue'
import Schedule from './components/Schedule.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },  
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },  
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }    

  ]
})