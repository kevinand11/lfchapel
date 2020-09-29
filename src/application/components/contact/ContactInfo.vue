<template>
	<div class="row justify-content-center">
		<div class="col-6 col-sm-4 hover d-flex flex-column">
			<i class="fas fa-map-marker-alt"></i>
			<h4>Address</h4>
			<div class="hidden">
				<p>{{ address }}</p>
			</div>
		</div>
		<div class="col-6 col-sm-4 hover d-flex flex-column">
			<i class="fas fa-phone"></i>
			<h4>Phone</h4>
			<div class="hidden">
				<p>{{ phone }}</p>
			</div>
		</div>
		<div class="col-8 col-sm-4 hover d-flex flex-column">
			<i class="fas fa-envelope"></i>
			<h4>Email</h4>
			<div class="hidden">
				<p class="mb-0">{{ email_1 }}</p>
				<p class="mb-0">{{ email_2 }}</p>
				<p class="mb-0">{{ email_3 }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	setup(){
	    return {
	        address: process.env.VUE_APP_CHURCH_ADDRESS,
		    email_1: process.env.VUE_APP_CHURCH_EMAIL_1,
		    email_2: process.env.VUE_APP_CHURCH_EMAIL_2,
		    email_3: process.env.VUE_APP_CHURCH_EMAIL_3,
		    phone: process.env.VUE_APP_CHURCH_PHONE
	    }
	}
})
</script>

<style lang="scss" scoped>
	.hover{
		padding: 1rem;
		text-align: center;
		i{
			font-size: 2rem;
			color: $gold;
		}
		h4{
			color: $gold;
			margin: 1rem 0;
			font-size: 1.125rem;
		}
		.hidden{
			display: none;
		}
	}
	.hover:hover {
		border: 2px solid $gold;
		border-radius: 8px;
		i{ font-size: 4rem; }
		.hidden{ display: block; }
	}
	@media (min-width: 768px){
		.hover i { font-size: 4rem; }
		.hover h4 { margin: 2rem 0; }
		.hover:hover i{ font-size: 6rem; }
	}
</style>
