import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes'
import { closeNavbar } from '@/config'

Vue.use(VueRouter)
Vue.use(VueMeta, { keyName: 'meta', refreshOnceOnNavigation: true })

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.afterEach(() => {
	document.getElementsByTagName('body')[0].scrollIntoView()
	closeNavbar()
})
export default router
