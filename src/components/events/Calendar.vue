<template>
	<div>
		<h4>{{ isLoading }}</h4>
		<FullCalendar :options="options" />
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import useCalendar from '@/usecases/useCalendar'
export default {
	components: {
		FullCalendar
	},
	setup(){
		const { options, isLoading } = useCalendar()
		return { options, isLoading }
	}
}
</script>
