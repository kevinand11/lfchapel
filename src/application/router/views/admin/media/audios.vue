<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<div class="d-flex justify-content-end mb-4">
				<button class="btn btn-lg btn-success" @click="setCreateModalAudio">Add New Audio</button>
			</div>
			<hr>
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<AudioCard v-for="audio in audios" :key="audio.id" :audio="audio" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderAudios" :disabled="olderAudiosLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderAudiosLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useAudiosList } from '@app/usecases/media/audios'
import { useCreateModal } from '@app/usecases/modals'
import AudioCard from '@app/components/admin/media/AudioCard.vue'
export default defineComponent({
	name: 'Audios',
	components: {
		AudioCard
	},
	setup(){
		const { loading, olderAudiosLoading, hasMore, error, audios, fetchOlderAudios } = useAudiosList()
		return {
			loading, olderAudiosLoading, hasMore, error, audios, fetchOlderAudios,
			setCreateModalAudio: useCreateModal().setCreateModalAudio
		}
	},
	meta(){
		return {
			title: 'Audios',
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
	grid-row-gap: 1rem;
}
@media (min-width: $lg) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
