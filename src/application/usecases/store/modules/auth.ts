import { computed, ComputedRef } from '@vue/composition-api'
import { Store } from '@app/store'
import { UserFromModel } from '@modules/users/data/models/user'

const getters = {
	isLoggedIn: computed(() => Store.getters.isLoggedIn) as ComputedRef<boolean>,
	isAdmin: computed(() => Store.getters.isAdmin) as ComputedRef<boolean>,
	getId: computed(() => Store.getters.getId) as ComputedRef<string>,
	getUser: computed(() => Store.getters.getUser) as ComputedRef<UserFromModel>,
}

const actions = {
	setId: (id: string | null) => Store.dispatch('setId', id)
}

export const Auth = {
	...getters,
	...actions
}
