<template>
	<div>
		<Loading v-if="loading" />
		<div class="card-columns" v-else>
			<AudioCard v-for="audio in audios" :audio="audio" :key="audio.id" />
		</div>
	</div>
</template>

<script>
import AudioCard from '@/components/media/AudioCard'
import { useAudiosList } from '@/usecases/useAudios'
export default {
	components: {
		AudioCard
	},
	setup(){
		const { audios, loading } = useAudiosList()
		return { audios, loading }
	},
	meta(){
		return {
			title: 'Audio Sermons - Living Faith Chapel',
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
