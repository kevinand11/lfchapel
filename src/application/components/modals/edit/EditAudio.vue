<template>
	<audio-form :submit="editAudio" :loading="loading" :factory="factory">
		<template slot="title">
			<div class="d-flex align-items-baseline justify-content-between my-3">
				<i></i>
				<h4>Edit Audio</h4>
				<a @click.prevent="closeEditModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template slot="buttonText">Save Audio</template>
	</audio-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import { useEditAudio } from '@app/usecases/media/audios'
import AudioForm from '@app/components/admin/media/AudioForm.vue'
export default defineComponent({
	name: 'EditAudio',
	components: {
		'audio-form': AudioForm
	},
	setup(){
		const { closeEditModal } = useEditModal()
		const { loading, editAudio, factory } = useEditAudio()
		return {
			loading, editAudio, factory,
			closeEditModal
		}
	}
})
</script>
