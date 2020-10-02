<template>
	<div>
		<div class="card shadow-sm">
			<div class="card-body">
				<h5 class="card-title mb-1">{{ testimony.name }}</h5>
				<p class="card-subtitle small text-muted mb-2">{{ testimony.email }}</p>
				<p class="card-text">{{ testimony.message }}</p>
				<div>
					<a class="card-link text-warning" @click.prevent="openEditModal">Edit</a>
					<a class="card-link text-danger" @click.prevent="deleteTestimony">Delete</a>
				</div>
			</div>
		</div>
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { TestimonyEntity } from '@modules/form/domain/entities/testimony'
import { setCurrentEditingTestimony, useDeleteTestimony } from '@app/usecases/form/testimonies'
import { useEditModal } from '@app/usecases/modals'
export default defineComponent({
	props: {
		testimony: {
			type: TestimonyEntity,
			required: true
		}
	},
	setup(props){
		const { loading, deleteTestimony } = useDeleteTestimony(props.testimony)
		return {
			openEditModal: () => {
				setCurrentEditingTestimony(props.testimony)
				useEditModal()//.setEditModalTestimony()
			},
			loading, deleteTestimony,
		}
	},
})
</script>
