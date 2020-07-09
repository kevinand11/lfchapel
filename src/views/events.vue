<template>
	<div>
		<RouteName />
		<div class="container">
			<h4>Coming soon</h4>
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
	}
}
</script>
