<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<TestimonyCard v-for="testimony in testimonies" :key="testimony.hash" :testimony="testimony" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderTestimonies" :disabled="olderTestimoniesLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderTestimoniesLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useTestimoniesList } from '@app/usecases/form/testimonies'
import TestimonyCard from '@app/components/admin/form/TestimonyCard.vue'
export default defineComponent({
	name: 'Testimonies',
	components: {
		TestimonyCard
	},
	setup(){
		const { loading, olderTestimoniesLoading, hasMore, error, testimonies, fetchOlderTestimonies } = useTestimoniesList()
		return {
			loading, olderTestimoniesLoading, hasMore, error, testimonies, fetchOlderTestimonies
		}
	},
	meta(){
		return {
			title: 'Testimonies',
			meta: [
				{
					vmid: 'robots',
					name: 'robots',
					content: 'none'
				}
			]
		}
	}
})
</script>


<style lang="scss" scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
}
@media (min-width: $lg) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
