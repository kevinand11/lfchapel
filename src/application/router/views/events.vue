<template>
	<Default>
		<RouteName />
		<div class="container">
			<Calendar />
		</div>
	</Default>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Calendar from '@app/components/events/Calendar.vue'
export default defineComponent({
	name: 'Events',
	components: {
		Calendar,
	},
	meta(){
		return {
			title: 'Events - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
})
</script>
