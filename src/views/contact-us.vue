<template>
	<div class="container py-5">
		<div class="row py-4 align-items-center flex-column-reverse flex-lg-row">
			<div class="col-lg-6 mb-3">
				<ContactForm />
			</div>
			<div class="col-lg-6 mb-3">
				<ContactInfo />
			</div>
		</div>
	</div>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
export default {
	components: {
		ContactForm,
		ContactInfo
	}
}
</script>
