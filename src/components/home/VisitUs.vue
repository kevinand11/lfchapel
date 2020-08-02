<template>
	<section class="py-5">
		<div class="container">
			<div class="section-header">
				<h2>Visit Our Church</h2>
			</div>
		</div>
		<GoogleMap />
	</section>
</template>

<script>
import GoogleMap from '@/components/application/GoogleMap'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	components: {
		GoogleMap
	}
})
</script>

<style lang="scss" scoped>
	h2{
		font-size: 1.4rem;
		font-weight: 400;
		margin-bottom: 2.25rem;
	}
	@media (min-width: 576px){
		h2{
			font-size: 1.5rem;
			margin-bottom: 2.5rem;
		}
	}
	@media (min-width: 768px){
		h2{
			font-size: 2.0rem;
			margin-bottom: 2.75rem;
			font-weight: 300;
		}
	}
	@media (min-width: 992px){
		h2{
			font-size: 2.5rem;
			margin-bottom: 3.0rem;
		}
	}
</style>
