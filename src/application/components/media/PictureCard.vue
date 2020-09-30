<template>
	<div class="card mb-4 shadow-sm">
		<img :src="picture.image" class="card-img-top" @click="showModal" alt="">
		<div class="card-body">
			<h4 class="card-title text-center">{{ picture.title }}</h4>
			<p class="card-text">{{ picture.trimmedDescription }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { PictureEntity } from '@modules/media/domain/entities/picture'
import { setCurrentViewingPicture } from '@app/usecases/media/pictures'
import { useMediaModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		picture: {
			type: PictureEntity,
			required: true
		}
	},
	setup(props ){
		const showModal = () => {
			setCurrentViewingPicture(props.picture)
			useMediaModal().setMediaModalGallery()
		}
		return { showModal }
	}
})
</script>
