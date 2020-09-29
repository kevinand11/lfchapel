<template>
	<ModalBase>
		<template slot="header">
			<div class="d-flex justify-content-between">
				<i></i>
				<h4>Create Picture</h4>
				<a @click.prevent="closeCreateModal"><i class="fas fa-times text-danger"></i></a>
			</div>
		</template>
		<template>
			<p>Body</p>
		</template>
	</ModalBase>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreateModal } from '@app/usecases/modals'
export default defineComponent({
	components: {},
	setup(){
		const { closeCreateModal } = useCreateModal()
		return {
			closeCreateModal
		}
	}
})
</script>
