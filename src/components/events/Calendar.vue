<template>
	<div>
		<FullCalendar :options="options" />
		<Loading v-if="loading" />
	</div>
</template>

<script lang="ts">
import FullCalendar from '@fullcalendar/vue'
import { useEventList } from '@/usecases/events/useEvents'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	components: {
		FullCalendar
	},
	setup(){
		const { options, loading } = useEventList()
		return { options, loading }
	}
})
</script>

<style scoped lang="scss">
	td.fc-daygrid-day{ cursor: pointer !important; }
	button.btn-primary{ color: $white !important; }
	button.btn-primary{ color: $white !important; }
</style>
