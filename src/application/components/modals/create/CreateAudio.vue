<template>
	<div class="">
		<audio-form :submit="createAudio" :loading="loading" :factory="factory">
			<template slot="title">
				<div class="d-flex align-items-baseline justify-content-between my-3">
					<i></i>
					<h4>Create Audio</h4>
					<a @click.prevent="closeCreateModal"><i class="fas fa-times text-danger"></i></a>
				</div>
			</template>
			<template slot="buttonText">Create Audio</template>
		</audio-form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import { useCreateAudio } from '@app/usecases/media/audios'
import AudioForm from '@app/components/admin/media/AudioForm.vue'
export default defineComponent({
	name: 'CreateAudio',
	components: {
		'audio-form': AudioForm
	},
	setup(){
		const { closeCreateModal } = useCreateModal()
		const { loading, createAudio, factory } = useCreateAudio()
		return {
			loading, createAudio, factory,
			closeCreateModal
		}
	}
})
</script>
