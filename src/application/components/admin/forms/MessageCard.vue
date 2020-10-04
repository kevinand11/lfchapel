<template>
	<div>
		<div class="card shadow-sm">
			<div class="card-body position-relative">
				<h5 class="card-title">{{ message.subject }}</h5>
				<p class="card-text">{{ message.message }}</p>
				<div class="d-flex flex-column">
					<h5 class="card-title mb-1">- {{ message.name }}</h5>
					<p class="card-subtitle small text-muted mb-2">{{ message.email }}</p>
				</div>
				<i class="fas fa-3x marked shadow-sm" :class="message.attendedTo ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-warning'"></i>
				<div>
					<a class="card-link" @click.prevent="toggleAttendedTo"
					   :class="message.attendedTo ? 'text-warning' : 'text-success'">
						{{ message.attendedTo ? 'Unmark' : 'Mark' }} attended to
					</a>
					<a class="card-link text-danger" v-if="message.attendedTo" @click.prevent="deleteMessage">Delete</a>
				</div>
			</div>
		</div>
		<Loading v-if="delLoading || editLoading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { MessageEntity } from '@modules/forms/domain/entities/message'
import { setCurrentEditingMessage, useDeleteMessage, useEditMessage } from '@app/usecases/forms/messages'
import { Alert } from '@app/config/notifications'
export default defineComponent({
	props: {
		message: {
			type: MessageEntity,
			required: true
		}
	},
	setup(props){
		const { loading: editLoading, factory, editMessage } = useEditMessage()
		const { loading: delLoading, deleteMessage } = useDeleteMessage(props.message)
		return {
			editLoading, delLoading, deleteMessage,
			toggleAttendedTo: async () => {
				const result = await Alert({
					title: `Mark ${props.message.attendedTo ? 'un' : ''}attended to`,
					text: `Are you sure you want to ${props.message.attendedTo ? 'un' : ''}mark this message attended to?`,
					icon: 'info',
					confirmButtonText: props.message.attendedTo ? 'Unmark' : 'Mark'
				})
				if(result.value){
					factory.loadEntity(props.message)
					setCurrentEditingMessage(props.message)
					factory.attendedTo = !factory.attendedTo
					await editMessage()
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
