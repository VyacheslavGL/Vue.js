import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,

    },
      //эта страница нужна, только чтобы мы смогли настроить веб сервер на код ответа 404
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
      //для любого маршруда, поэтому должно быть в самом конце
      //т.к. если бы было совпадение, то Vue Router дальше ничего не анализирует
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
