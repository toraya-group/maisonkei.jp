export { default as Contents } from '../../components/Contents.vue'
export { default as ContentsHeader } from '../../components/ContentsHeader.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeaderNav } from '../../components/HeaderNav.vue'
export { default as HeaderReservation } from '../../components/HeaderReservation.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NewsArchiveNav } from '../../components/NewsArchiveNav.vue'
export { default as NewsCategoryNav } from '../../components/NewsCategoryNav.vue'
export { default as NewsLoadBtn } from '../../components/NewsLoadBtn.vue'

export const LazyContents = import('../../components/Contents.vue' /* webpackChunkName: "components/contents" */).then(c => c.default || c)
export const LazyContentsHeader = import('../../components/ContentsHeader.vue' /* webpackChunkName: "components/contents-header" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHeaderNav = import('../../components/HeaderNav.vue' /* webpackChunkName: "components/header-nav" */).then(c => c.default || c)
export const LazyHeaderReservation = import('../../components/HeaderReservation.vue' /* webpackChunkName: "components/header-reservation" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNewsArchiveNav = import('../../components/NewsArchiveNav.vue' /* webpackChunkName: "components/news-archive-nav" */).then(c => c.default || c)
export const LazyNewsCategoryNav = import('../../components/NewsCategoryNav.vue' /* webpackChunkName: "components/news-category-nav" */).then(c => c.default || c)
export const LazyNewsLoadBtn = import('../../components/NewsLoadBtn.vue' /* webpackChunkName: "components/news-load-btn" */).then(c => c.default || c)
