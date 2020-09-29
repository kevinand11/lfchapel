import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from './routes'
import { addToCachedScrolls, getCachedScroll, saveIntendedRoute } from '@app/usecases/core/router'
import { useStore } from '@app/usecases/store'
import { Notify } from '@app/config/notifications'

Vue.use(VueRouter)
Vue.use(VueMeta, { keyName: 'meta', refreshOnceOnNavigation: true })

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior: async (to) => new Promise((resolve) => {
		setTimeout(() => resolve({ x: 0, y: getCachedScroll(to.fullPath) }), 1)
	})
})

router.beforeEach(async (to, from, next) => {
	addToCachedScrolls(from.fullPath, document.documentElement.scrollTop)
	const requiresAuth = to.matched.some((route) => route.meta.requiresAuth)
	const requiresNoAuth = to.matched.some((route) => route.meta.requiresNoAuth)
	const requiresAdmin = to.matched.some((route) => route.meta.requiresAdmin)
	const isLoggedIn = useStore().auth.isLoggedIn.value
	const isAdmin = useStore().auth.isAdmin.value
	if (requiresAuth && !isLoggedIn) {
		saveIntendedRoute(to.fullPath)
		await Notify({ icon: 'error', 'title': 'Login to continue' })
		return next('/admin/signin')
	}
	if(requiresNoAuth && isLoggedIn) return next('/admin/')
	if(requiresAdmin && !isAdmin) return next('/')

	return next()
})

export default router
