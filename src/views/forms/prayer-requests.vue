<template>
	<div>
		<form @submit.prevent="() => {}">
			<h3 class="mb-3 red">Your Prayer Request</h3>
			<p class="lead mb-4">Prayer can be rich when it's simple and spontaneous. In fact, we can pray, at any time. It doesn't require lofty language.</p>
			<div class="form-group">
				<label for="name">Your Name</label>
				<input type="text" id="name" class="form-control" placeholder="Eg. John Doe" v-model="request.name">
			</div>
			<div class="form-group">
				<label for="email">Your Email</label>
				<input type="email" id="email" class="form-control" placeholder="Eg. johndoe@gmail.com" v-model="request.email">
			</div>
			<div class="form-group">
				<label for="message">Your Request</label>
				<textarea id="message" rows="6" class="form-control" v-model="request.message"
				          placeholder="Eg I would like the church to join me in praying for my family members"></textarea>
			</div>
			<div class="form-group">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" id="secret" v-model="request.public">
					<label class="form-check-label" for="secret">
						Can we share your prayer request publicly in church?
					</label>
				</div>
			</div>
			<button class="btn btn-outline-primary" @click="submit" :disabled="loading">
				<i class="fas fa-spinner fa-spin mr-2" v-if="loading"></i>
				<span>Submit</span>
			</button>
		</form>
	</div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api'
import { createPrayerRequest } from '@/usecases/useFunctions'
import { notify } from '@/config/notify'

export default {
	setup(){
		const loading = ref(false)
		const request = reactive({ name: '', email: '', message: '', public: true })
		const submit = async () => {
			if(!request.name || !request.email || !request.message){
				return await notify({ title: 'Please fill in all fields', icon: 'error' })
			}
			loading.value = true
			await createPrayerRequest({ name: request.name, email: request.email, message: request.message, public: request.public })
			request.name = request.email = request.message = ''
			request.public = true
			loading.value = false
			await notify({ title: 'Prayer request sent successfully', icon: 'success' })
		}
		return {
			request, submit, loading
		}
	},
	meta(){
		return {
			title: 'Prayer Requests - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
