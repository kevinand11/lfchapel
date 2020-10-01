<template>
	<div>
		<form @submit.prevent="() => {}">
			<h3 class="mb-4 red">Your Message</h3>
			<div class="form-group">
				<label for="name">Your Name</label>
				<input type="text" id="name" class="form-control" placeholder="Eg. John Doe" v-model="feedback.name">
			</div>
			<div class="form-group">
				<label for="email">Your Email</label>
				<input type="email" id="email" class="form-control" placeholder="Eg. johndoe@gmail.com" v-model="feedback.email">
			</div>
			<div class="form-group">
				<label for="message">Your Message</label>
				<textarea id="message" rows="6" class="form-control" v-model="feedback.message"
				          placeholder="Eg I would recommend the pastor on his empowering message last sunday."></textarea>
			</div>
			<button class="btn btn-outline-gold" @click="submit" :disabled="loading">
				<i class="fas fa-spinner fa-spin mr-2" v-if="loading"></i>
				<span>Submit</span>
			</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'
import { createFeedback } from '@app/usecases/useFunctions'
import { Notify } from '@app/config/notifications'
export default defineComponent({
	setup(){
		const loading = ref(false)
		const feedback = reactive({ name: '', email: '', message: '' })
		const submit = async () => {
			if(!feedback.name || !feedback.email || !feedback.message){
				return await Notify({ title: 'Please fill in all fields', icon: 'error' })
			}
			loading.value = true
			await createFeedback({ name: feedback.name, email: feedback.email, message: feedback.message })
			feedback.name = feedback.email = feedback.message = ''
			loading.value = false
			await Notify({ title: 'Feedback sent successfully', icon: 'success' })
		}
		return {
			feedback, submit, loading
		}
	},
	meta(){
		return {
			title: 'Feedback - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
})
</script>
