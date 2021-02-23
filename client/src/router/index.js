import Vue from 'vue'
import Router from 'vue-router'
import Een from '@/components/Een'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Een',
      component: Een
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
