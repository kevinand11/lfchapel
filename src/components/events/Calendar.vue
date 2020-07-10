<template>
	<div>
		<FullCalendar :options="options" />
		<Loading v-if="loading" />
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import useEvents from '@/usecases/useEvents'
export default {
	components: {
		FullCalendar
	},
	setup(){
		const { options, loading } = useEvents()
		return { options, loading }
	}
}
</script>

<style lang="scss">
	a.fc-daygrid-event{
		cursor: pointer !important;
		div.fc-event-time{ display: none !important; }
	}
</style>
