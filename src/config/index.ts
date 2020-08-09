import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
import VueJsModal from 'vue-js-modal'

import '@/config/registerServiceWorker'
import 'jquery'
import 'bootstrap'
import '@/assets/style/index.scss'

import Default from '@/layouts/Default.vue'

import RouteName from '@/components/application/RouteName.vue'
import Loading from '@/components/application/Loading.vue'
import AudioPlayer from '@/components/application/AudioPlayer.vue'

Vue.use(CompositionApi)
Vue.use(VueJsModal, { dialog: true, dynamicDefaults: {
	dynamic: true, width: '90%', minWidth: 600, maxWidth: 900,
	height: 'auto', adaptive: false, scrollable: true, focusTrap: true
}})

Vue.component('Default', Default)

Vue.component('RouteName', RouteName)
Vue.component('Loading', Loading)
Vue.component('AudioPlayer', AudioPlayer)

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
