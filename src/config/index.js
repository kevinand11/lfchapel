import Vue from 'vue'
import VueMeta from 'vue-meta'
import CompositionApi from '@vue/composition-api'

import '@/config/registerServiceWorker'
import 'bootstrap'
import '@/assets/style/index.scss'

Vue.use(VueMeta, { keyName: 'meta', refreshOnceOnNavigation: true })
Vue.use(CompositionApi)

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
