<template>
	<div>
		<TestimonyForm :factory="factory" :loading="loading" :submit="createTestimony">
			<template slot="title"><h4 class="mb-4 red">Your Testimony</h4></template>
		</TestimonyForm>
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TestimonyForm from '@app/components/admin/form/TestimonyForm.vue'
import { useCreateTestimony } from '@app/usecases/forms/testimonies'
export default defineComponent({
	components: {
		TestimonyForm
	},
	setup(){
		const { loading, factory, createTestimony } = useCreateTestimony()
		return {
			factory, createTestimony , loading
		}
	},
	meta(){
		return {
			title: 'Testimonies - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
})
</script>
