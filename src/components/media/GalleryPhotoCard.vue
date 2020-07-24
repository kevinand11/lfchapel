<template>
	<div class="card mb-4">
		<img :src="photo.link" class="card-img-top" alt="" @click="onClicked(photo.id)">
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	props: {
		photo: {
			type: Object as () => PhotoI,
			required: true
		},
		onClicked: {
			type: Object as () => (id: Id) => void,
			required: true
		}
	}
})
</script>
