import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'

Vue.use(Vuex)

const Store = new Vuex.Store({
	modules: {
		users
	}
})

export { Store }
