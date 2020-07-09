<template>
	<div>
		<FullCalendar :options="options" />
		<Loading v-if="isLoading" />
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import Loading from '@/components/application/Loading'
import useCalendar from '@/usecases/useCalendar'
export default {
	components: {
		FullCalendar,
		Loading
	},
	setup(){
		const { options, isLoading } = useCalendar()
		return { options, isLoading }
	}
}
</script>

<style lang="scss">
	a.fc-daygrid-event{
		cursor: pointer !important;
		div.fc-event-time{ display: none !important; }
	}
</style>
