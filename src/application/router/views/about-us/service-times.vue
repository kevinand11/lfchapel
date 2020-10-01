<template>
	<div>
		<section>
			<h3 class="mb-4 red">Our Service Times</h3>
			<p>
				<b class="red mr-3">Sundays:</b>
				<span>9:30am</span>
			</p>
			<p>
				<b class="red mr-3">Mondays:</b>
				<span>Prayer Meetings by 8:00pm</span>
			</p>
			<p>
				<b class="red mr-3">Wednesday:</b>
				<span>Bible Study by 7:00pm</span>
			</p>
			<p>
				<b class="red mr-3">First Fridays of the month:</b>
				<span>Night of Wonder by 8:00pm</span>
			</p>

			<p class="mt-4">
				To check out other events, proceed to the <router-link to="/events">events</router-link> page.
				We look forward to seeing you in church at each event
			</p>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	meta(){
		return {
			title: 'Service Times - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
})
</script>
