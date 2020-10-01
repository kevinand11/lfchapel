<template>
	<video-form :submit="editVideo" :loading="loading" :factory="factory">
		<template slot="title">
			<div class="d-flex align-items-baseline justify-content-between my-3">
				<i></i>
				<h4>Edit Video</h4>
				<a @click.prevent="closeEditModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template slot="buttonText">Save Video</template>
	</video-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import { useEditVideo } from '@app/usecases/media/videos'
import VideoForm from '@app/components/admin/media/VideoForm.vue'
export default defineComponent({
	name: 'EditVideo',
	components: {
		'video-form': VideoForm
	},
	setup(){
		const { closeEditModal } = useEditModal()
		const { loading, editVideo, factory } = useEditVideo()
		return {
			loading, editVideo, factory,
			closeEditModal
		}
	}
})
</script>
