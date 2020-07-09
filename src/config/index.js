import Vue from 'vue'
import VueMeta from 'vue-meta'
import '@/config/registerServiceWorker'
import 'bootstrap'

Vue.use(VueMeta, { keyName: 'meta', refreshOnceOnNavigation: true })

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
