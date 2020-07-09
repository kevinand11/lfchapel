<template>
	<div>
		<RouteName />
		<div class="container">
			<h4>Coming soon</h4>
		</div>
	</div>
</template>

<script>
import RouteName from '@/components/application/RouteName.vue'
export default {
	components: {
		RouteName
	},
	meta(){
		return {
			title: 'Announcement - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
