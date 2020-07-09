<template>
	<div>
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
	</div>
</template>

<script>
import RouteName from '@/components/application/RouteName.vue'
import GoogleMap from '@/components/application/GoogleMap.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
export default {
	components: {
		RouteName,
		GoogleMap,
		ContactForm,
		ContactInfo
	}
}
</script>
