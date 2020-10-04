<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<RequestCard v-for="request in requests" :key="request.hash" :request="request" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderRequests" :disabled="olderRequestsLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderRequestsLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useRequestsList } from '@app/usecases/forms/requests'
import RequestCard from '@app/components/admin/forms/RequestCard.vue'
export default defineComponent({
	name: 'Requests',
	components: {
		RequestCard
	},
	setup(){
		const { loading, olderRequestsLoading, hasMore, error, requests, fetchOlderRequests } = useRequestsList()
		return {
			loading, olderRequestsLoading, hasMore, error, requests, fetchOlderRequests
		}
	},
	meta(){
		return {
			title: 'Prayer Requests',
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
