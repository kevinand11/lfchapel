import router from '@app/router'
import { Notify } from '@app/config/notifications'
import {
	GetLoginFactory, GetRegisterFactory, GetResetPasswordFactory,
	LoginWithEmail, LoginWithGoogle, Logout, RegisterWithEmail, ResetPassword
} from '@modules/users'
import { computed, reactive } from '@vue/composition-api'
import { useStore } from '@app/usecases/store'
import { getIntendedRoute } from '@app/usecases/core/router'

const afterAuthHook = async () => {
	const route = getIntendedRoute()
	if(route) await router.push(route).catch((e) => e)
	else await router.push('/admin/').catch((e) => e)
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
		await router.push('/admin/signin')
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
