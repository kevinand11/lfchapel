<template>
	<div>
		<DailyEvent v-if="isEventModalDaily" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useEventModal } from '@app/usecases/modals'
import DailyEvent from '@app/components/modals/events/DailyEvent.vue'
export default defineComponent({
	components: {
		DailyEvent
	},
	setup(){
		const { isEventModalDaily } = useEventModal()
		return {
			isEventModalDaily
		}
	}
})
</script>
