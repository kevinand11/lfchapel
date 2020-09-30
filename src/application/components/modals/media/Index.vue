<template>
	<div>
		<Gallery v-if="isMediaModalGallery" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useMediaModal } from '@app/usecases/modals'
import Gallery from '@app/components/modals/media/Gallery.vue'
export default defineComponent({
	components: {
		Gallery
	},
	setup(){
		const { isMediaModalGallery } = useMediaModal()
		return {
			isMediaModalGallery
		}
	}
})
</script>
