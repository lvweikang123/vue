import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'
import Weather from './views/Weather.vue'
import Student from './views/Student.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 写法一   上面先import
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // 写法二  匿名函数返回引用的组件
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      //示例
    {
      path:'/demo',
      name:'demo',
      component: Demo
    },
    {
      path:'/weather',
      name:'weather',
      component: Weather
    },
    {
      path:'/student',
      name:'student',
      component: Student
    },
  ]
})
