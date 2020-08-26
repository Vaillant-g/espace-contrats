import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _40ee2b72 = () => interopDefault(import('..\\client\\pages\\contrat\\index.vue' /* webpackChunkName: "pages/contrat/index" */))
const _bdeccce4 = () => interopDefault(import('..\\client\\pages\\espaceClient\\index.vue' /* webpackChunkName: "pages/espaceClient/index" */))
const _59e5165a = () => interopDefault(import('..\\client\\pages\\informations\\index.vue' /* webpackChunkName: "pages/informations/index" */))
const _9b24e65e = () => interopDefault(import('..\\client\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _17f34f7a = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contrat",
    component: _40ee2b72,
    name: "contrat"
  }, {
    path: "/espaceClient",
    component: _bdeccce4,
    name: "espaceClient"
  }, {
    path: "/informations",
    component: _59e5165a,
    name: "informations"
  }, {
    path: "/login",
    component: _9b24e65e,
    name: "login"
  }, {
    path: "/",
    component: _17f34f7a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
