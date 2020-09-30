<template>
	<div>
		<div class="card shadow-sm">
			<img :src="picture.image" alt="" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">{{ picture.title }}</h5>
				<p class="card-text">{{ picture.trimmedDescription }}</p>
				<div>
					<a target="_blank" :href="picture.image" class="card-link text-info">Preview</a>
					<a class="card-link text-warning" @click.prevent="openEditModal">Edit</a>
					<a class="card-link text-danger" @click.prevent="deletePicture">Delete</a>
				</div>
			</div>
		</div>
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { PictureEntity } from '@modules/media/domain/entities/picture'
import { setCurrentEditingPicture, useDeletePicture } from '@app/usecases/media/pictures'
import { useEditModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		picture: {
			type: PictureEntity,
			required: true
		}
	},
	setup(props){
		const { loading, deletePicture } = useDeletePicture(props.picture)
		return {
			openEditModal: () => {
				setCurrentEditingPicture(props.picture)
				useEditModal().setEditModalPicture()
			},
			loading, deletePicture,
		}
	},
})
</script>
