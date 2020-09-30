<template>
	<div class="card shadow-sm">
		<div class="card-body">
			<h5 class="card-title text-capitalize">{{ audio.title }}</h5>
			<AudioPlayer class="my-3" :audio="audio" />
			<p class="card-text">{{ audio.trimmedDescription }}</p>
			<div>
				<a class="card-link text-warning" @click.prevent="openEditModal">Edit</a>
				<a class="card-link text-danger" @click.prevent="deleteAudio">Delete</a>
			</div>
		</div>
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { AudioEntity } from '@modules/media/domain/entities/audio'
import { setCurrentEditingAudio, useDeleteAudio } from '@app/usecases/media/audios'
import { useEditModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		audio: {
			type: AudioEntity,
			required: true
		}
	},
	setup(props){
		const { loading, deleteAudio } = useDeleteAudio(props.audio)
		return {
			openEditModal: () => {
				setCurrentEditingAudio(props.audio)
				useEditModal().setEditModalAudio()
			},
			loading, deleteAudio,
		}
	},
})
</script>
