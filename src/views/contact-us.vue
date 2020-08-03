<template>
	<Default>
		<RouteName />
		<GoogleMap />
		<div class="container">
			<div class="row py-4 align-items-center flex-column-reverse flex-lg-row">
				<div class="col-lg-6 mb-3">
					<ContactForm />
				</div>
				<div class="col-lg-6 mb-3">
					<ContactInfo />
				</div>
			</div>
		</div>
	</Default>
</template>

<script>
import GoogleMap from '@/components/application/GoogleMap.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
export default {
	components: {
		GoogleMap,
		ContactForm,
		ContactInfo
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
}
</script>
