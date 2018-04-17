import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import App from '@/components/app/app.vue';
Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    path:'/App',
      name:'App',
      component:App
    }
  ]
})
