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
import GoogleMap from '@/application/components/application/GoogleMap'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	components: {
		GoogleMap
	}
})
</script>
