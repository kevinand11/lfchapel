import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
import '@/config/registerServiceWorker'

import 'bootstrap'

Vue.use(CompositionApi)

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
