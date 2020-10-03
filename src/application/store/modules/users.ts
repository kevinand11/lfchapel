// @ts-nocheck
import { Store } from '@app/store'
import { FindUser } from '@modules/users'

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
	setId: (state, id) => {
		state.id = id
		if(id) window.localStorage.setItem('user_id', id)
		else window.localStorage.removeItem('user_id')
	},
	setProfileListener: (state, listener) => {
		state.profileListener()
		state.profileListener = listener
	},
	setUser: (state, user) => {
		state.user = user
		if(user) window.localStorage.setItem('user', JSON.stringify(user))
		else window.localStorage.removeItem('user')
	}
}

const actions = {
	setId: async({ commit }, id) => {
		commit('setId', id)
		await Store.dispatch('closeProfileListener')
		if(id){
			const user = await FindUser.call(id)
			commit('setUser', user ?? null)
			if(user) commit('setUser', user)
			else commit('setId', null)
		}else commit('setUser', null)
	},
	closeProfileListener: ({ commit }) => commit('setProfileListener', () => {}),
}

export default { state, getters, mutations, actions }
