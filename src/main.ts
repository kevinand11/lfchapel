import Vue from 'vue'
import App from './application/App.vue'
import { setup } from '@/config/'
import router from './application/router'
import { Store } from './application/store'
import { useStore } from '@/application/usecases/store'
import { RegisterAuthChangedCB } from '@/modules/users'

Vue.config.productionTip = false

setup()
if(process.env.NODE_ENV === 'production') RegisterAuthChangedCB.call((user) => useStore().auth.setId(user?.uid ?? null))

new Vue({
	router,
	store: Store,
	render: (h) => h(App),
}).$mount('#app')
