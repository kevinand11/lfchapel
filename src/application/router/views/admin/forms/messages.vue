<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<Loading v-if="loading"/>
			<div class="grid" v-else>
				<MessageCard v-for="message in messages" :key="message.hash" :message="message" />
			</div>
			<div class="d-flex justify-content-end my-3" v-if="hasMore">
				<button class="btn-success" @click="fetchOlderMessages" :disabled="olderMessagesLoading">
					<i class="fas fa-spinner fa-spin mr-2" v-if="olderMessagesLoading"></i>
					<span>Fetch More</span>
				</button>
			</div>
			<p v-if="error" class="mt-4 text-danger lead text-center">{{ error }}</p>
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useMessagesList } from '@app/usecases/forms/messages'
import MessageCard from '@app/components/admin/forms/MessageCard.vue'
export default defineComponent({
	name: 'Messages',
	components: {
		MessageCard
	},
	setup(){
		const { loading, olderMessagesLoading, hasMore, error, messages, fetchOlderMessages } = useMessagesList()
		return {
			loading, olderMessagesLoading, hasMore, error, messages, fetchOlderMessages
		}
	},
	meta(){
		return {
			title: 'Messages',
			meta: [
				{
					vmid: 'robots',
					name: 'robots',
					content: 'none'
				}
			]
		}
	}
})
</script>


<style lang="scss" scoped>
.grid{
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
}
@media (min-width: $lg) {
	.grid{
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
