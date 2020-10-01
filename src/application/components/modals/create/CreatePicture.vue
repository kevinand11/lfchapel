<template>
	<picture-form :submit="createPicture" :loading="loading" :factory="factory">
		<template slot="title">
			<div class="d-flex align-items-baseline justify-content-between my-3">
				<i></i>
				<h4>Create Picture</h4>
				<a @click.prevent="closeCreateModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template slot="buttonText">Create Picture</template>
	</picture-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
import { useCreatePicture } from '@app/usecases/media/pictures'
import PictureForm from '@app/components/admin/media/PictureForm.vue'
export default defineComponent({
	name: 'CreatePicture',
	components: {
		'picture-form': PictureForm
	},
	setup(){
		const { closeCreateModal } = useCreateModal()
		const { loading, createPicture, factory } = useCreatePicture()
		return {
			loading, createPicture, factory,
			closeCreateModal
		}
	}
})
</script>
