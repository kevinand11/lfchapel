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
			<button class="btn btn-outline-primary" @click="submit">Submit</button>
		</form>
	</div>
</template>

<script>
import { reactive } from '@vue/composition-api'
export default {
	setup(){
		const feedback = reactive({ name: '', email: '', message: '' })
		const submit = () => {
			console.log(feedback)
			feedback.name = feedback.email = feedback.message = ''
		}
		return {
			feedback, submit
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
}
</script>
