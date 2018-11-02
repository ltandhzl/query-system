import Vue from 'vue'
import Router from 'vue-router'
import Card from '../components/card/card'
import Index from '../components/index/index'
import LoginCard from '../components/login-card/login-card'
import LoginClass from '../components/login-class/login-class'
import Library from '../components/library/Library'
import LoginLibrary from '../components/library/pages/login-library'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/login-card',
      name: 'LoginCard',
      component: LoginCard
    },
    {
      path: '/login-class',
      name: 'LoginClass',
      component: LoginClass
    },
    {
      path: '/library',
      name: 'Library',
      component: Library
    },
    {
      path: '/login-library',
      name: 'LoginLibrary',
      component: LoginLibrary
    }
  ]
})
