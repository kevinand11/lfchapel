<template>
	<div>
		<MessageForm :factory="factory" :loading="loading" :submit="createMessage">
			<template slot="title"><h4 class="mb-4 red">Your Message</h4></template>
		</MessageForm>
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MessageForm from '@app/components/admin/forms/MessageForm.vue'
import { useCreateMessage } from '@app/usecases/forms/messages'
export default defineComponent({
	components: {
		MessageForm
	},
	setup(){
		const { loading, factory, createMessage } = useCreateMessage()
		return {
			factory, createMessage , loading
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
