<template>
	<form @submit.prevent="() => {}">
		<h3 class="mb-4 red">Leave us a message</h3>
		<div class="form-group">
			<label for="name">Your Name</label>
			<input type="text" id="name" class="form-control" placeholder="Eg. John Doe" v-model="message.name">
		</div>
		<div class="form-group">
			<label for="email">Your Email</label>
			<input type="email" id="email" class="form-control" placeholder="Eg. johndoe@gmail.com" v-model="message.email">
		</div>
		<div class="form-group">
			<label for="subject">Subject</label>
			<input type="text" id="subject" class="form-control" placeholder="Eg. Book an appointment" v-model="message.subject">
		</div>
		<div class="form-group">
			<label for="message">Your Message</label>
			<textarea id="message" rows="6" class="form-control" v-model="message.message"
		          placeholder="Eg I want to book a private session with the pastor on Friday at 12 noon"></textarea>
		</div>
		<button class="btn btn-outline-gold" @click="submit" :disabled="loading">
			<i class="fas fa-spinner fa-spin mr-2" v-if="loading"></i>
			<span>Submit</span>
		</button>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'
import { createContactMessage } from '@app/usecases/useFunctions'
import { Notify } from '@app/config/notifications'
export default defineComponent({
	setup() {
		const loading = ref(false)
		const message = reactive({ name: '', email: '', subject: '', message: '' })
		const submit = async () => {
			if (!message.name || !message.email || !message.subject || !message.message) {
				return await Notify({ title: 'Please fill in all fields', icon: 'error' })
			}
			loading.value = true
			await createContactMessage({
				name: message.name,
				email: message.email,
				subject: message.subject,
				message: message.message
			})
			message.name = message.email = message.subject = message.message = ''
			loading.value = false
			await Notify({ title: 'Message sent successfully', icon: 'success' })
		}
		return {
			message, submit, loading
		}
	}
})
</script>
