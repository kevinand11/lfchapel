import Vue from 'vue'
<<<<<<< HEAD
import VueMeta from 'vue-meta'
=======
import CompositionApi from '@vue/composition-api'
>>>>>>> fullcalendar
import '@/config/registerServiceWorker'
import 'bootstrap'

<<<<<<< HEAD
Vue.use(VueMeta, { keyName: 'meta', refreshOnceOnNavigation: true })
=======
Vue.use(CompositionApi)
>>>>>>> fullcalendar

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
