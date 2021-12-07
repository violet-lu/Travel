import Vue from 'vue'
import Router from 'vue-router'
import Head from '../components/head.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: Head
    }
  ]
})
