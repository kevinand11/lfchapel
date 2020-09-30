<template>
	<div>
		<div class="card shadow-sm">
			<img :src="video.preview" alt="" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">{{ video.title }}</h5>
				<p class="card-text">{{ video.trimmedDescription }}</p>
				<div>
					<a class="card-link text-warning" @click.prevent="openEditModal">Edit</a>
					<a class="card-link text-danger" @click.prevent="deleteVideo">Delete</a>
				</div>
			</div>
		</div>
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { VideoEntity } from '@modules/media/domain/entities/video'
import { setCurrentEditingVideo, useDeleteVideo } from '@app/usecases/media/videos'
import { useEditModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		video: {
			type: VideoEntity,
			required: true
		}
	},
	setup(props){
		const { loading, deleteVideo } = useDeleteVideo(props.video)
		return {
			openEditModal: () => {
				setCurrentEditingVideo(props.video)
				useEditModal().setEditModalVideo()
			},
			loading, deleteVideo,
		}
	},
})
</script>
