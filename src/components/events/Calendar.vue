<template>
	<div>
		<FullCalendar :options="options" />
		<Loading v-if="loading" />
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import { useEventList } from '@/usecases/events/useEvents'
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
	td.fc-daygrid-day{ cursor: pointer !important; }
</style>
