import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home'},
  ],
  linkActiveClass: 'mui-active'
})
// var router = new Router({
//   routes:{
    
//   }
// })

// export default router
