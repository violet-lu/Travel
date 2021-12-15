import Vue from 'vue'
import Router from 'vue-router'
import Head from '../components/head/head.vue'
import City from '../components/city/city.vue'
import Detail from '../components/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: Head
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
