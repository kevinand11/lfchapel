<template>
	<Default>
		<RouteName />
		<GoogleMap />
		<div class="container">
			<div class="row py-4 align-items-center flex-column-reverse flex-lg-row">
				<div class="col-lg-6 mb-3">
					<MessageForm :factory="factory" :loading="loading" :submit="createMessage">
						<template slot="title"><h4 class="mb-4 red">Leave us a message</h4></template>
					</MessageForm>
					<Loading v-if="loading" />
				</div>
				<div class="col-lg-6 mb-3">
					<ContactInfo />
				</div>
			</div>
		</div>
	</Default>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import GoogleMap from '@app/components/general/GoogleMap.vue'
import ContactInfo from '@app/components/contact/ContactInfo.vue'
import MessageForm from '@app/components/admin/forms/MessageForm.vue'
import { useCreateMessage } from '@app/usecases/forms/messages'
export default defineComponent({
	components: {
		GoogleMap,
		MessageForm,
		ContactInfo
	},
	setup(){
		const { loading, factory, createMessage } = useCreateMessage()
		return {
			factory, createMessage , loading
		}
	},
	meta(){
		return {
			title: 'Contact Us - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
})
</script>
