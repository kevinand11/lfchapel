<template>
	<div>
		<div class="card shadow-sm">
			<div class="card-body position-relative">
				<p class="card-text">
					<i class="fas fa-2x mr-1 fa-quote-left text-muted"></i>
					<span class="lead">{{ request.message }}</span>
				</p>
				<div class="d-flex flex-column">
					<h5 class="card-title mb-1">- {{ request.name }}</h5>
					<p class="card-subtitle small text-muted mb-2">{{ request.email }}</p>
				</div>
				<p class="card-text">
					<i class="fas mr-1" :class="request.public ? 'fa-eye text-success' : 'fa-eye-slash text-danger'"></i>
					<span class="small text-muted" v-if="request.public">This prayer request is marked public, which means the owner gives consent to share openly</span>
					<span class="small text-muted" v-else>This prayer request is marked private, which means the owner will like to keep it between themselves, the pastor and God.</span>
				</p>
				<i class="fas fa-3x marked shadow-sm" :class="request.attendedTo ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-warning'"></i>
				<div>
					<a class="card-link" @click.prevent="toggleAttendedTo"
					   :class="request.attendedTo ? 'text-warning' : 'text-success'">
						{{ request.attendedTo ? 'Unmark' : 'Mark' }} attended to
					</a>
					<a class="card-link text-danger" v-if="request.attendedTo" @click.prevent="deleteRequest">Delete</a>
				</div>
			</div>
		</div>
		<Loading v-if="delLoading || editLoading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { RequestEntity } from '@modules/forms/domain/entities/request'
import { setCurrentEditingRequest, useDeleteRequest, useEditRequest } from '@app/usecases/forms/requests'
import { Alert } from '@app/config/notifications'
export default defineComponent({
	props: {
		request: {
			type: RequestEntity,
			required: true
		}
	},
	setup(props){
		const { loading: editLoading, factory, editRequest } = useEditRequest()
		const { loading: delLoading, deleteRequest } = useDeleteRequest(props.request)
		return {
			editLoading, delLoading, deleteRequest,
			toggleAttendedTo: async () => {
				const result = await Alert({
					title: `Mark ${props.request.attendedTo ? 'un' : ''}attended to`,
					text: `Are you sure you want to ${props.request.attendedTo ? 'un' : ''}mark this prayer request attended to?`,
					icon: 'info',
					confirmButtonText: props.request.attendedTo ? 'Unmark' : 'Mark'
				})
				if(result.value){
					factory.loadEntity(props.request)
					setCurrentEditingRequest(props.request)
					factory.attendedTo = !factory.attendedTo
					await editRequest()
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
