import Vue from 'vue'
import VueRouter from 'vue-router'
import { computed, inject, provide, ref, unref } from '@vue/composition-api'
import projectConfig from '@/config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/third/index',
    name: 'third',
    component: () => import(/* webpackChunkName: "third" */ '../views/ThirdView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export const RouterSymbol = Symbol(`${projectConfig.projectName}-router`)
export const provideRouter = (router) => {
  provide(RouterSymbol, router)
}
export const useRouter = () => {
  const $router = ref(inject(RouterSymbol))
  const $route = computed(() => unref($router).currentRoute)
  return {
    $router,
    $route
  }
}

export default router
