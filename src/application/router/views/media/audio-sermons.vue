<template>
	<div>
		<Loading v-if="loading" />
		<div class="grid" v-else>
			<AudioCard v-for="audio in audios" :audio="audio" :key="audio.id" />
		</div>
		<div class="d-flex justify-content-end my-3" v-if="hasMore">
			<button class="btn-success" @click="fetchOlderAudios" :disabled="olderAudiosLoading">
				<i class="fas fa-spinner fa-spin mr-2" v-if="olderAudiosLoading"></i>
				<span>Fetch More</span>
			</button>
		</div>
		<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AudioCard from '@app/components/media/AudioCard.vue'
import { useAudiosList } from '@app/usecases/media/audios'
export default defineComponent({
	components: {
		AudioCard
	},
	setup(){
		const { loading, olderAudiosLoading, hasMore, error, audios, fetchOlderAudios } = useAudiosList()
		return {
			loading, olderAudiosLoading, hasMore, error, audios, fetchOlderAudios
		}
	},
	meta(){
		return {
			title: 'Gallery - Living Faith Chapel',
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
