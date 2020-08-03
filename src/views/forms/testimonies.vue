<template>
	<div>
		<form @submit.prevent="() => {}">
			<h3 class="mb-4 red">Your Testimony</h3>
			<div class="form-group">
				<label for="name">Your Name</label>
				<input type="text" id="name" class="form-control" placeholder="Eg. John Doe" v-model="testimony.name">
			</div>
			<div class="form-group">
				<label for="email">Your Email</label>
				<input type="email" id="email" class="form-control" placeholder="Eg. johndoe@gmail.com" v-model="testimony.email">
			</div>
			<div class="form-group">
				<label for="message">Your Testimony</label>
				<textarea id="message" rows="6" class="form-control" v-model="testimony.message"
				          placeholder="Eg I would like to thank the Lord for seeing me through a very trying period."></textarea>
			</div>
			<div class="form-group">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" id="secret" v-model="testimony.public">
					<label class="form-check-label" for="secret">
						Can we share your testimony publicly in church?
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
import { createTestimony } from '@/usecases/useFunctions'
import { notify } from '@/config/notify'
export default {
	setup(){
		const loading = ref(false)
		const testimony = reactive({ name: '', email: '', message: '', public: true })
		const submit = async () => {
			if(!testimony.name || !testimony.email || !testimony.message){
				await notify({ title: 'Please fill in all fields', icon: 'error' })
			}
			loading.value = true
			await createTestimony({ name: testimony.name, email: testimony.email, message: testimony.message, public: testimony.public })
			testimony.name = testimony.email = testimony.message = ''
			testimony.public = true
			loading.value = false
			await notify({ title: 'Testimony sent successfully', icon: 'success' })
		}
		return {
			testimony, submit, loading
		}
	},
	meta(){
		return {
			title: 'Testimonies - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
