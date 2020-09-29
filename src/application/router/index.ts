import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes'
import { closeNavbar } from '@/config'
import { addToCachedScrolls, saveIntendedRoute } from '@/application/usecases/core/router'
import { useStore } from '@/application/usecases/store'
import { Notify } from '@/config/notify'

Vue.use(VueRouter)
Vue.use(VueMeta, { keyName: 'meta', refreshOnceOnNavigation: true })

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach(async (to, from, next) => {
	addToCachedScrolls(from.fullPath, document.documentElement.scrollTop)
	const requiresAuth = to.matched.some((route) => route.meta.requiresAuth)
	const requiresAdmin = to.matched.some((route) => route.meta.requiresAdmin)
	const isLoggedIn = useStore().auth.isLoggedIn.value
	const isAdmin = useStore().auth.isAdmin.value
	if (requiresAuth && !isLoggedIn) {
		saveIntendedRoute(to.fullPath)
		await Notify({ icon: 'error', 'title': 'Login to continue' })
		return next('/admin/sign-in')
	}
	if(requiresAdmin && !isAdmin){
		return next('/')
	}
	return next()
})

router.afterEach(() => {
	document.getElementsByTagName('body')[0].scrollIntoView()
	closeNavbar()
})
export default router
