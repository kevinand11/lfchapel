import Vue from 'vue'
import VueMeta from 'vue-meta'
import CompositionApi from '@vue/composition-api'

import '@/config/registerServiceWorker'
import 'bootstrap'
import '@/assets/style/index.scss'

import RouteName from '@/components/application/RouteName'
import Loading from '@/components/application/Loading'

Vue.use(VueMeta, { keyName: 'meta', refreshOnceOnNavigation: true })
Vue.use(CompositionApi)

Vue.component('RouteName', RouteName)
Vue.component('Loading', Loading)

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
