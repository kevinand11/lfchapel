<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<div class="d-flex justify-content-end mb-4">
				<button class="btn btn-lg btn-success" @click="setCreateModalVideo">Add New Video</button>
			</div>
			<hr>
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<VideoCard v-for="video in videos" :key="video.id" :video="video" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderVideos" :disabled="olderVideosLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderVideosLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useVideosList } from '@app/usecases/media/videos'
import { useCreateModal } from '@app/usecases/modals'
import VideoCard from '@app/components/admin/media/VideoCard.vue'
export default defineComponent({
	name: 'Videos',
	components: {
		VideoCard
	},
	setup(){
		const { loading, olderVideosLoading, hasMore, error, videos, fetchOlderVideos } = useVideosList()
		return {
			loading, olderVideosLoading, hasMore, error, videos, fetchOlderVideos,
			setCreateModalVideo: useCreateModal().setCreateModalVideo
		}
	},
	meta(){
		return {
			title: 'Videos',
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
