<template>
	<div>
		<RouteName />
		<div class="container">
			<Calendar />
		</div>
	</div>
</template>

<script>
import RouteName from '@/components/application/RouteName.vue'
import Calendar from '@/components/events/Calendar.vue'
export default {
	components: {
		RouteName,
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
}
</script>
