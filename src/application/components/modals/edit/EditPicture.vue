<template>
	<div class="">
		<picture-form :submit="editPicture" :loading="loading" :factory="factory">
			<template slot="title">
				<div class="d-flex align-items-baseline justify-content-between my-3">
					<i></i>
					<h4>Edit Picture</h4>
					<a @click.prevent="closeEditModal"><i class="fas fa-times text-danger"></i></a>
				</div>
			</template>
			<template slot="buttonText">Edit Picture</template>
		</picture-form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEditModal } from '@app/usecases/modals'
import { useEditPicture } from '@app/usecases/media/pictures'
import PictureForm from '@app/components/admin/media/PictureForm.vue'
export default defineComponent({
	name: 'EditPicture',
	components: {
		'picture-form': PictureForm
	},
	setup(){
		const { closeEditModal } = useEditModal()
		const { loading, editPicture, factory } = useEditPicture()
		return {
			loading, editPicture, factory,
			closeEditModal
		}
	}
})
</script>
