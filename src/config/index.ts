import Vue from 'vue'
import VueJsModal from 'vue-js-modal'

import '@/config/composition'
import '@/config/registerServiceWorker'
import '@/config/components'

import 'jquery'
import 'bootstrap'
import '@/application/assets/style/index.scss'

export const setup = () => {
	Vue.use(VueJsModal, { dialog: true, dynamicDefaults: {
		dynamic: true, width: '90%', minWidth: 600, maxWidth: 900,
		height: 'auto', adaptive: false, scrollable: true, focusTrap: true
	}})
}

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
