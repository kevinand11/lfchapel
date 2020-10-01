import { acceptUpdate, addWaitingListener } from '@app/config/registerServiceWorker'
import '@app/config/components'

import 'jquery'
import 'bootstrap'
import '@app/assets/style/index.scss'

export const setup = () => {
	addWaitingListener(() => {
		//alert('New content has been detected.')
		acceptUpdate(() => true)//confirm('Press OK to load the content or CANCEL to ignore.'))
	})
}

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
