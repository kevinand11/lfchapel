<template>
	<div>
		<RequestForm :factory="factory" :loading="loading" :submit="createRequest">
			<template slot="title">
				<h4 class="mb-3 red">Your Prayer Request</h4>
				<p class="lead mb-4">Prayer can be rich when it's simple and spontaneous. In fact, we can pray, at any time. It doesn't require lofty language.</p>
			</template>
		</RequestForm>
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import RequestForm from '@app/components/admin/forms/RequestForm.vue'
import { useCreateRequest } from '@app/usecases/forms/requests'
export default defineComponent({
	components: {
		RequestForm
	},
	setup(){
		const { loading, factory, createRequest } = useCreateRequest()
		return {
			factory, createRequest , loading
		}
	},
	meta(){
		return {
			title: 'Prayer Requests - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
})
</script>
