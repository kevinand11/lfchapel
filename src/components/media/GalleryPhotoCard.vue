<template>
	<div class="card mb-4">
		<img :src="photo.link" class="card-img-top" alt="" @click="onClicked(photo.id)">
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { PropType } from '@vue/composition-api'
export default defineComponent({
	props: {
		photo: {
			type: Object as PropType<PhotoI>,
			required: true
		},
		onClicked: {
			type: Function as PropType<(id: Id) => void>,
			required: true
		}
	}
})
</script>
