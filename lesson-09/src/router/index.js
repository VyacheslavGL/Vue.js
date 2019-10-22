import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    //:name - обязательный параметр, :sub? - опциональный не обязательный со знаком вопрос
    path: '/breed/:name/:sub?',
    name: 'breed-page',
    component: () => import(/* webpackChunkName: "breed" */ '../views/Breed.vue')
  },
  {
    path: '/favorites',
    name: 'fav',
    component: () => import(/* webpackChunkName: "fav" */ '../views/Favorites.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
