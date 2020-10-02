<template>
	<div>
		<div class="card shadow-sm">
			<div class="card-body position-relative">
				<p class="card-text">
					<i class="fas fa-2x mr-1 fa-quote-left text-muted"></i>
					<span class="lead">{{ testimony.message }}</span>
				</p>
				<h5 class="card-title mb-1">- {{ testimony.name }}</h5>
				<p class="card-subtitle small text-muted mb-2">{{ testimony.email }}</p>
				<p class="card-text">
					<i class="fas mr-1" :class="testimony.public ? 'fa-eye text-success' : 'fa-eye-slash text-danger'"></i>
					<span class="small text-muted" v-if="testimony.public">This testimony is marked public, which means the owner gives consent to share openly</span>
					<span class="small text-muted" v-else>This testimony is marked private, which means the owner will like to keep it between themselves, the pastor and God.</span>
				</p>
				<i class="fas fa-3x marked shadow-sm" :class="testimony.attendedTo ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-warning'"></i>
				<div>
					<a class="card-link text-warning" @click.prevent="toggleAttendedTo">{{ testimony.attendedTo ? 'Unmark' : 'Mark' }} attended to</a>
					<a class="card-link text-danger" v-if="testimony.attendedTo" @click.prevent="deleteTestimony">Delete</a>
				</div>
			</div>
		</div>
		<Loading v-if="delLoading || editLoading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { TestimonyEntity } from '@modules/form/domain/entities/testimony'
import { setCurrentEditingTestimony, useDeleteTestimony, useEditTestimony } from '@app/usecases/form/testimonies'
import { Alert } from '@app/config/notifications'
export default defineComponent({
	props: {
		testimony: {
			type: TestimonyEntity,
			required: true
		}
	},
	setup(props){
		const { loading: editLoading, factory, editTestimony } = useEditTestimony()
		const { loading: delLoading, deleteTestimony } = useDeleteTestimony(props.testimony)
		return {
			editLoading, delLoading, deleteTestimony,
			toggleAttendedTo: async () => {
				const result = await Alert({
					title: `Mark ${props.testimony.attendedTo ? 'un' : ''}attended to`,
					text: `Are you sure you want to ${props.testimony.attendedTo ? 'un' : ''}mark this testimony attended to?`,
					icon: 'info',
					confirmButtonText: props.testimony.attendedTo ? 'Unmark' : 'Mark'
				})
				if(result.value){
					setCurrentEditingTestimony(props.testimony)
					factory.attendedTo = !factory.attendedTo
					await editTestimony()
				}
			}
		}
	},
})
</script>

<style lang="scss" scoped>
	i.marked{
		background: $white;
		position: absolute;
		top: 0;
		right: 0;
		margin: -1rem 0 0 0;
		z-index: 1;
		border-radius: 10rem;
	}
</style>
