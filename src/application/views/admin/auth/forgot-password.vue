<template>
	<Admin>
		<div class="py-3 p-md-4 d-flex flex-column justify-content-center align-items-center">
			<div class="p-3 p-md-5 shadow-sm rounded-xl">
				<h3 class="text-center">Forgot Password</h3>
				<p class="small text-center my-4">Provide the email address associated with your previously created account.</p>
				<form class="mx-2" @submit.prevent="resetPassword">
					<div class="form-group">
						<input type="email" id="email" class="form-control" placeholder="Email address" v-model="factory.email"
						       :class="{'is-invalid': factory.errors.email, 'is-valid': factory.isValid('email')}" autocomplete="email">
						<span class="small text-danger" v-if="factory.errors.email">{{ factory.errors.email }}</span>
					</div>
					<div class="d-flex flex-column">
						<button class="btn btn-primary" type="submit" :disabled="loading || !factory.valid">
							<i class="fas fa-spinner fa-spin" v-if="loading"></i>
							<span v-else>Retrieve Password</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useResetPasswordForm } from '@/application/usecases/users/auth'
export default defineComponent({
	name: 'ForgotPassword',
	setup(){
		const { loading, factory, resetPassword } = useResetPasswordForm()
		return { loading, factory, resetPassword }
	},
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
