// @ts-nocheck
import { Store } from '@/application/store'
import { FindUser } from '@/modules/users'

const state = {
	id: window.localStorage.getItem('user_id') ?? null,
	user: JSON.parse(window.localStorage.getItem('user')) ?? null,
	profileListener: () => {}
}

const getters = {
	getId: (state) => state.id,
	getUser: (state) => state.user,
	isLoggedIn: (state) => !!(state.id && state.user),
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
		commit('setUser', null)
		await Store.dispatch('closeProfileListener')
		if(id){
			const user = await FindUser.call(id)
			commit('setUser', user ?? null)
			if(user){
				commit('setUser', user)
				window.localStorage.setItem('user', JSON.stringify(user))
			}else commit('setId', null)
			window.localStorage.setItem('user_id', id)
		}else{
			window.localStorage.removeItem('user')
			window.localStorage.removeItem('user_id')
		}

	},
	closeProfileListener: ({ commit }) => commit('setProfileListener', () => {}),
}

export default { state, getters, mutations, actions }
