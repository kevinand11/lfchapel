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

<script lang="ts">
import GoogleMap from '@app/components/general/GoogleMap.vue'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	components: {
		GoogleMap
	}
})
</script>
