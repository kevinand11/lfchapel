<template>
	<div>
		<RouteName />
		<div class="container">
			<p>Secured online giving – Your information is protected! You now have an opportunity to make your donations online.</p>
			<p>It is fast, free and secure! As usual, this request will not be seen by the general public. All information will be kept strictly confidential. Simply select the Contribution Options below. Thank you for your giving and God bless you!!!</p>
			<p><span class="red">NOTE</span>: Please include your Jesus House Baltimore Member Number in the <span class="red">Description</span> field on the next page. Do contact the church office if you do not know your member number on 443-273-3563.</p>
			<DonateForm />
		</div>
	</div>
</template>

<script>
import RouteName from '@/components/application/RouteName.vue'
import DonateForm from '@/components/give/DonateForm.vue'
export default {
	components: {
		RouteName,
		DonateForm
	}
}
</script>
