import router from '@app/router'
import { Notify } from '@app/config/notifications'
import {
	GetLoginFactory, GetRegisterFactory, GetResetPasswordFactory,
	LoginWithEmail, LoginWithGoogle, Logout, RegisterWithEmail, ResetPassword
} from '@modules/users'
import { computed, reactive } from '@vue/composition-api'
import { useStore } from '@app/usecases/store'

const afterAuthHook = async () => {
	await router.push('/admin/')
}

export const useRegisterForm = () => {
	const state = reactive({
		loading: false,
		factory: GetRegisterFactory.call(),
	})
	const register = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				const userId = await RegisterWithEmail.call(state.factory)
				await useStore().auth.setId(userId)
				state.factory.reset()
				await afterAuthHook()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else{
			state.factory.validateAll()
		}
	}
	return {
		loading: computed(() => state.loading),
		factory: state.factory,
		register
	}
}

export const useLogout = () => {
	const state = reactive({
		loading: false
	})
	const logout = async () => {
		state.loading = true
		await useStore().auth.setId(null)
		if(router.currentRoute.meta.requiresAuth) await router.push('/admin/signin')
		await Logout.call()
		state.loading = false
	}

	return {
		loading: computed(() => state.loading),
		logout
	}
}

export const useLoginForm = () => {
	const state = reactive({
		loading: false,
		factory: GetLoginFactory.call(),
	})
	const login = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				const userId = await LoginWithEmail.call(state.factory)
				await useStore().auth.setId(userId)
				state.factory.reset()
				await afterAuthHook()
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else{
			state.factory.validateAll()
		}
	}
	return {
		loading: computed(() => state.loading),
		factory: state.factory,
		login
	}
}

export const useGoogleLogin = () => {
	const state = reactive({
		loading: false
	})
	const login = async () => {
		state.loading = true
		try{
			const userId = await LoginWithGoogle.call()
			await useStore().auth.setId(userId)
			await afterAuthHook()
		}catch(error){ await Notify({ icon: 'error', title: error.message }) }
		state.loading = false
	}
	return {
		loading: computed(() => state.loading),
		login
	}
}

export const useDevLogin = () => {
	const devs = ['kevin11','frank']
	const state = reactive({
		loading: false,
		id: ''
	})
	const login = async () => {
		state.loading = true
		if(state.id){
			await useStore().auth.setId(state.id)
			await afterAuthHook()
		}else await Notify({ title: 'Select a dev id first', icon: 'error' })
		state.loading = false
	}
	return {
		loading: computed(() => state.loading),
		isDev: computed(() => process.env.NODE_ENV === 'development'),
		id: computed({ get: () => state.id, set: (value: string) => state.id = value }),
		devs, login
	}
}

export const useResetPasswordForm = () => {
	const state = reactive({
		loading: false,
		factory: GetResetPasswordFactory.call(),
	})
	const resetPassword = async () => {
		if(state.factory.valid && !state.loading){
			state.loading = true
			try{
				await ResetPassword.call(state.factory)
				state.factory.reset()
				await Notify({ icon: 'success', title: 'Proceed to your registered email to continue' })
				await router.push('/admin/signin')
			}catch(error){ await Notify({ icon: 'error', title: error.message }) }
			state.loading = false
		}else{
			state.factory.validateAll()
		}
	}
	return {
		loading: computed(() => state.loading),
		factory: state.factory,
		resetPassword
	}
}
