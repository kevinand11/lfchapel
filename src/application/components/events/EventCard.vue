<template>
	<div class="bg-white rounded-xl shadow border-light d-flex flex-column mb-3">
		<img src="../../assets/images/background.jpg" alt="" class="w-100">
		<div class="flex-grow-1 p-3">
			<h3 class="mb-2">{{ event.title }}</h3>
			<p>{{ event.trimmedDescription }}</p>
			<p class="lead">{{ formatDate(event.start) }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Event from '@/data/entities/events'
import { formatDate, formatDateTime } from '@app/usecases/events/calendar'

export default defineComponent({
	props: {
	    event: {
	        required: true,
		    type: Event
	    }
	},
	setup(){
	    return {
	        formatDate,
		    formatDateTime
	    }
	}
})
</script>
