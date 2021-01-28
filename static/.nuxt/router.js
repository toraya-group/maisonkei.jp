import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64231ee5 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _fddaed26 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _13d7ec3a = () => interopDefault(import('../pages/errors/404.vue' /* webpackChunkName: "pages/errors/404" */))
const _ac67d704 = () => interopDefault(import('../pages/news/202101/index.vue' /* webpackChunkName: "pages/news/202101/index" */))
const _f0497ab8 = () => interopDefault(import('../pages/news/202101/30/index.vue' /* webpackChunkName: "pages/news/202101/30/index" */))
const _5eec7353 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/news",
    component: _64231ee5,
    name: "news"
  }, {
    path: "/profile",
    component: _fddaed26,
    name: "profile"
  }, {
    path: "/errors/404",
    component: _13d7ec3a,
    name: "errors-404"
  }, {
    path: "/news/202101",
    component: _ac67d704,
    name: "news-202101"
  }, {
    path: "/news/202101/30",
    component: _f0497ab8,
    name: "news-202101-30"
  }, {
    path: "/",
    component: _5eec7353,
    name: "index"
  }, {
    path: "*",
    component: _13d7ec3a,
    name: "custom"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
