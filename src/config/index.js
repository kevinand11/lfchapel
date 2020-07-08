import '@/config/registerServiceWorker'

import 'bootstrap'

export const closeNavbar = () => {
	const collapse = document.getElementById('navbar')
	collapse ? collapse.classList.remove('show') : null
}
