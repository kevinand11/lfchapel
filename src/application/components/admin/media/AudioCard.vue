<template>
	<div class="card mb-4 shadow-sm">
		<div class="card-body">
			<h4 class="card-title text-center">{{ audio.title }}</h4>
			<p class="card-text">{{ audio.trimmedDescription }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { AudioEntity } from '@modules/media/domain/entities/audio'
export default defineComponent({
	props: {
		audio: {
			type: AudioEntity,
			required: true
		}
	},
})
</script>
