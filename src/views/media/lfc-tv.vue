<template>
	<div>
		<Loading v-if="loading" />
		<div class="card-columns" v-else>
			<VideoCard v-for="video in videos" :video="video" :key="video.id" />
		</div>
	</div>
</template>

<script>
import VideoCard from '@/components/media/VideoCard'
import { useVideosList } from '@/usecases/media/useVideos'
export default {
	components: {
		VideoCard
	},
	setup(){
		const { videos, loading } = useVideosList()
		return { videos, loading }
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
}
</script>

<style lang="scss" scoped>
	.card-columns{ column-count: 1; }
	@media (min-width: $lg) {
		.card-columns{ column-count: 2; }
	}
	@media (min-width: $xl) {
		.card-columns{ column-count: 3; }
	}
</style>
