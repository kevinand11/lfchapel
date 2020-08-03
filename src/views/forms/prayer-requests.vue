<template>
	<div>
		<form @submit.prevent="() => {}">
			<h3 class="mb-4 red">Your Prayer Request</h3>
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
			<button class="btn btn-outline-primary" @click="submit">Submit</button>
		</form>
	</div>
</template>

<script>
import { reactive } from '@vue/composition-api'
export default {
	setup(){
		const request = reactive({ name: '', email: '', message: '', public: true })
		const submit = () => {
			console.log(request)
			request.name = request.email = request.message = ''
			request.public = true
		}
		return {
			request, submit
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
