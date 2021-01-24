<template>
	<Admin>
		<div class="py-3 p-md-4 d-flex flex-column justify-content-center align-items-center">
			<div class="p-3 p-md-5 shadow-sm rounded-xl">
				<h2 class="text-center">Sign In</h2>
				<p class="small mb-4 text-center">Sign in to gain authorization access to restricted content.</p>
				<form @submit.prevent="emailLogin">
					<div class="form-group">
						<input type="email" id="email" class="form-control" placeholder="Email address" v-model="emailFactory.email"
						       :class="{'is-invalid': emailFactory.errors.email, 'is-valid': emailFactory.isValid('email')}" autocomplete="email">
						<span class="small text-danger" v-if="emailFactory.errors.email">{{ emailFactory.errors.email }}</span>
					</div>
					<div class="form-group">
						<input type="password" id="password" class="form-control" placeholder="Password" v-model="emailFactory.password"
						       :class="{'is-invalid': emailFactory.errors.password, 'is-valid': emailFactory.isValid('password')}" autocomplete="password">
						<span class="small text-danger" v-if="emailFactory.errors.password">{{ emailFactory.errors.password }}</span>
					</div>
					<div class="d-flex flex-column">
						<button class="btn btn-gold text-white" type="submit" :disabled="anyLoading || !emailFactory.valid">
							<i class="fas fa-spinner fa-spin mr-2" v-if="emailLoading"></i>
							<span>Sign In with email</span>
						</button>
					</div>
					<div class="d-flex justify-content-between text-wrap align-items-center small mt-2">
						<span class="mr-2">
							Don't have an account?
							<router-link class="text-info" to="/admin/signup">Sign Up</router-link>
						</span>
						<span>
							Forgot Password?
							<router-link class="text-info" to="/admin/forgot-password">Retrieve Now</router-link>
						</span>
					</div>
				</form>
				<p class="text-center small text-muted mt-4 mb-2">Or sign in with other options</p>
				<div class="form-group d-flex flex-column mb-3">
					<button @click="googleLogin" class="btn btn-danger" :disabled="anyLoading">
						<i class="fas fa-spinner fa-spin" v-if="googleLoading"></i>
						<i class="fab fa-google text-white mr-2" v-else></i>
						Sign In with Google
					</button>
				</div>
			</div>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { useGoogleLogin, useLoginForm } from '@app/usecases/users/auth'
export default defineComponent({
	name: 'Signin',
	setup(){
		const { loading: emailLoading, login: emailLogin, factory: emailFactory } = useLoginForm()
		const { loading: googleLoading, login: googleLogin } = useGoogleLogin()
		return {
			emailLoading, emailLogin, emailFactory,
			googleLoading, googleLogin,
			anyLoading: computed(() => emailLoading.value || googleLoading.value),
		}
	},
	meta(){
		return {
			title: 'Sign In',
			meta: [
				{
					vmid: 'robots',
					name: 'robots',
					content: 'none'
				}
			]
		}
	}
})
</script>

<style lang="scss" scoped>
input{
	padding: 1rem;
	max-width: 700px;
}
.form-group{
	margin: 1rem 0;
}
</style>
