import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { closeNavbar } from '@/config'

Vue.use(VueRouter)

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
