<template>
	<Admin>
		<div class="py-3 p-md-4 d-flex flex-column justify-content-center align-items-center">
			<div class="px-3 py-5 px-md-5 shadow-sm rounded-xl">
				<h1 class="text-center text-danger"><i class="fas fa-exclamation-triangle"></i> Unauthorized</h1>
				<p class="mb-4 text-center w-75 mx-auto">You do not have the right permissions to continue viewing this portion of the site.</p>
				<div class="d-flex justify-content-center flex-wrap">
					<button class="my-2 btn btn-primary mr-2 text-nowrap" @click="goHome">Go back to main site</button>
					<button class="my-2 btn btn-danger" @click="logout">Logout</button>
					<Loading v-if="loading" />
				</div>
			</div>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useLogout } from '@app/usecases/users/auth'
import router from '@app/router'
export default defineComponent({
	name: 'Unauthorized',
	setup(){
		const { logout, loading } = useLogout()
		return {
			logout, loading,
			goHome: () => router.push('/')
		}
	},
	meta(){
		return {
			title: 'Unauthorized',
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
