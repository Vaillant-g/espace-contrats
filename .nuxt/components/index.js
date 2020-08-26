export { default as Header } from '../..\\client\\components\\header\\Header.vue'

export const LazyHeader = import('../..\\client\\components\\header\\Header.vue' /* webpackChunkName: "components_header/Header" */).then(c => c.default || c)
