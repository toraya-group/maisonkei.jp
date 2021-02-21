import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f43d1c7 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _b979596a = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _5d968676 = () => interopDefault(import('../pages/errors/404.vue' /* webpackChunkName: "pages/errors/404" */))
const _50a8bf5c = () => interopDefault(import('../pages/news/202101/index.vue' /* webpackChunkName: "pages/news/202101/index" */))
const _712b4306 = () => interopDefault(import('../pages/news/202101/30/index.vue' /* webpackChunkName: "pages/news/202101/30/index" */))
const _3f87cbf2 = () => interopDefault(import('../pages/news/202102/21/index.vue' /* webpackChunkName: "pages/news/202102/21/index" */))
const _d388099e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3f43d1c7,
    name: "news"
  }, {
    path: "/profile",
    component: _b979596a,
    name: "profile"
  }, {
    path: "/errors/404",
    component: _5d968676,
    name: "errors-404"
  }, {
    path: "/news/202101",
    component: _50a8bf5c,
    name: "news-202101"
  }, {
    path: "/news/202101/30",
    component: _712b4306,
    name: "news-202101-30"
  }, {
    path: "/news/202102/21",
    component: _3f87cbf2,
    name: "news-202102-21"
  }, {
    path: "/",
    component: _d388099e,
    name: "index"
  }, {
    path: "*",
    component: _5d968676,
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
