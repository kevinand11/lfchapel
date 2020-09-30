<template>
	<div>
		<Gallery v-if="isMediaModalGallery" />
		<Video v-if="isMediaModalVideo" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useMediaModal } from '@app/usecases/modals'
import Gallery from '@app/components/modals/media/Gallery.vue'
import Video from '@app/components/modals/media/Video.vue'
export default defineComponent({
	components: {
		Gallery,
		Video
	},
	setup(){
		const { isMediaModalGallery, isMediaModalVideo } = useMediaModal()
		return {
			isMediaModalGallery, isMediaModalVideo
		}
	}
})
</script>
