<template>
	<div>
		<Loading v-if="loading" />
		<div class="card-columns" v-else>
			<GalleryPhotoCard v-for="photo in photos" :photo="photo" :onClicked="showModal" :key="photo.id" />
		</div>
	</div>
</template>

<script>
import { usePhotosList } from '@/usecases/usePhotos'
import GalleryPhotoCard from '@/components/media/GalleryPhotoCard'
import { useModalInstance } from '@/usecases/useModal'
export default {
	components: {
		GalleryPhotoCard
	},
	setup(props, { root}){
		const { photos, fetchPhotos, loading } = usePhotosList()
		const { showGalleryModal } = useModalInstance(root.$modal)
		const showModal = () => showGalleryModal({ photos: photos.value })
		return { photos, fetchPhotos, loading, showModal }
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
}
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
