import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _acec8392 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _7b4e5e4a = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _3b7aa935 = () => interopDefault(import('../pages/errors/404.vue' /* webpackChunkName: "pages/errors/404" */))
const _72b61628 = () => interopDefault(import('../pages/news/202101/index.vue' /* webpackChunkName: "pages/news/202101/index" */))
const _fbef3914 = () => interopDefault(import('../pages/news/202101/30/index.vue' /* webpackChunkName: "pages/news/202101/30/index" */))
const _093008c1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _acec8392,
    name: "news"
  }, {
    path: "/profile",
    component: _7b4e5e4a,
    name: "profile"
  }, {
    path: "/errors/404",
    component: _3b7aa935,
    name: "errors-404"
  }, {
    path: "/news/202101",
    component: _72b61628,
    name: "news-202101"
  }, {
    path: "/news/202101/30",
    component: _fbef3914,
    name: "news-202101-30"
  }, {
    path: "/",
    component: _093008c1,
    name: "index"
  }, {
    path: "*",
    component: _3b7aa935,
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
