import '@app/config/registerServiceWorker'
import '@app/config/components'

import 'jquery'
import 'bootstrap'
import '@app/assets/style/index.scss'

export const setup = () => {}

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
