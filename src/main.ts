import Vue from 'vue'
import '@app/config/composition'
import App from '@app/App.vue'
import { setup } from '@app/config/'
import router from '@app/router'
import { Store } from '@app/store'
import { useStore } from '@app/usecases/store'
import { RegisterAuthChangedCB } from '@/modules/users'

Vue.config.productionTip = false

setup()
if(process.env.NODE_ENV === 'production') RegisterAuthChangedCB.call((user) => useStore().auth.setId(user?.uid ?? null))

new Vue({
	router,
	store: Store,
	render: (h) => h(App),
}).$mount('#app')
