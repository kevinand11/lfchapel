import Vue from 'vue'
import App from './application/App.vue'
import '@/config/'
import '@/application/assets/style/index.scss'
import router from './application/router'
import store from './application/store'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
