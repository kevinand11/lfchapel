<template>
	<video-form :submit="createVideo" :loading="loading" :factory="factory">
		<template slot="title">
			<div class="d-flex align-items-baseline justify-content-between my-3">
				<i></i>
				<h4>Create Video</h4>
				<a @click.prevent="closeCreateModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template slot="buttonText">Create Video</template>
	</video-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import { useCreateVideo } from '@app/usecases/media/videos'
import VideoForm from '@app/components/admin/media/VideoForm.vue'
export default defineComponent({
	name: 'CreateVideo',
	components: {
		'video-form': VideoForm
	},
	setup(){
		const { closeCreateModal } = useCreateModal()
		const { loading, createVideo, factory } = useCreateVideo()
		return {
			loading, createVideo, factory,
			closeCreateModal
		}
	}
})
</script>
