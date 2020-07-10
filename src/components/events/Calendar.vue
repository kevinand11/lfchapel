<template>
	<div>
		<FullCalendar :options="options" />
		<Loading v-if="loading" />
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import { useEventList } from '@/usecases/useEvents'
export default {
	components: {
		FullCalendar
	},
	setup(props, { root }){
		const { options, loading } = useEventList(root.$modal)
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
