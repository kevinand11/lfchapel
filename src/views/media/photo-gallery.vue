<template>
	<div>
		<Loading v-if="loading" />
		<div class="card-columns" v-else>
			<GalleryPhotoCard @click="showModal(photo)" v-for="photo in photos" :photo="photo" :key="photo.id" />
		</div>
	</div>
</template>

<script>
import { usePhotosList } from '@/usecases/usePhotos'
import GalleryPhotoCard from '@/components/media/GalleryPhotoCard'
import GalleryPhotoModal from '@/components/modals/media/Gallery'
export default {
	components: {
		GalleryPhotoCard
	},
	setup(){
		const { photos, fetchPhotos, loading } = usePhotosList()
		return { photos, fetchPhotos, loading }
	},
	meta(){
		return {
			title: 'Gallery - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	},
	methods: {
		showModal(){
			this.$modal.show(GalleryPhotoModal,{photo: { name: 'John' }})
		}
	},
	mounted(){
		this.showModal()
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
