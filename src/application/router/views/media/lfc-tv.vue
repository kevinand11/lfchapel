<template>
	<div>
		<Loading v-if="loading" />
		<div class="grid" v-else>
			<VideoCard v-for="video in videos" :video="video" :key="video.id" />
		</div>
		<div class="d-flex justify-content-end my-3" v-if="hasMore">
			<button class="btn-success" @click="fetchOlderVideos" :disabled="olderVideosLoading">
				<i class="fas fa-spinner fa-spin mr-2" v-if="olderVideosLoading"></i>
				<span>Fetch More</span>
			</button>
		</div>
		<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import VideoCard from '@app/components/media/VideoCard.vue'
import { useVideosList } from '@app/usecases/media/videos'
export default defineComponent({
	components: {
		VideoCard
	},
	setup(){
		const { loading, olderVideosLoading, hasMore, error, videos, fetchOlderVideos } = useVideosList()
		return {
			loading, olderVideosLoading, hasMore, error, videos, fetchOlderVideos
		}
	},
	meta(){
		return {
			title: 'LFC TV - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
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
