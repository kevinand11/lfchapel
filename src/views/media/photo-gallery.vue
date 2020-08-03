<template>
	<div>
		<Loading v-if="loading" />
		<div class="card-columns" v-else>
			<GalleryPhotoCard v-for="photo in photos" :photo="photo" :onClicked="showModal" :key="photo.id" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { usePhotosList } from '@/usecases/media/usePhotos'
import { useModal } from '@/usecases/useModal'
import GalleryPhotoCard from '@/components/media/GalleryPhotoCard.vue'

export default defineComponent({
	components: {
		GalleryPhotoCard
	},
	setup(){
		const { photos, loading } = usePhotosList()
		const { showGalleryModal } = useModal()
		const showModal = (id: Id) => showGalleryModal({ photos: photos.value, current: id })
		return { photos, loading, showModal }
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
	.card-columns{ column-count: 1; }
	@media (min-width: $sm) {
		.card-columns{ column-count: 2; }
	}
	@media (min-width: $lg) {
		.card-columns{ column-count: 3; }
	}
</style>
