import Vue from 'vue'
import Router from 'vue-router'
import Een from '@/components/Een'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Een',
      component: Een
    }
  ]
})
