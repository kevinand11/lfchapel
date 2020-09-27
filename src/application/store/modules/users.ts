// @ts-nocheck
import { firestore } from '@/config/firebase'
import { Store } from '@/application/store'

const state = {
	id: window.localStorage.getItem('user_id') ?? null,
	user: JSON.parse(window.localStorage.getItem('user')) ?? {},
	profileListener: () => {}
}

const getters = {
	getId: (state) => state.id,
	getUser: (state) => state.user,
	isLoggedIn: (state) => !!(state.id && state.user.bio),
	isAdmin: (state) => state.user?.roles?.isAdmin ?? false,
}

const mutations = {
	setId: (state, id) => state.id = id,
	setProfileListener: (state, listener) => {
		state.profileListener()
		state.profileListener = listener
	},
	setUser: (state, user) => state.user = user
}

const actions = {
	setId: async({ commit }, id) => {
		commit('setId', id)
		commit('setUser', {})
		await Store.dispatch('closeProfileListener')
		if(id){
			const listener = firestore
				.collection('users')
				.doc(id).onSnapshot((snapshot) => {
					if (snapshot.exists) {
						const user = snapshot.data()
						commit('setUser', user)
						window.localStorage.setItem('user', JSON.stringify(user))
					} else commit('setId', null)
				})
			await commit('setProfileListener', listener)
			window.localStorage.setItem('user_id', id)
		}else{
			window.localStorage.removeItem('user')
			window.localStorage.removeItem('user_id')
		}

	},
	closeProfileListener: ({ commit }) => commit('setProfileListener', () => {}),
}

export default { state, getters, mutations, actions }
