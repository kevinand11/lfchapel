<template>
	<div>
		<QuickActions />
		<Services />
	</div>
</template>

<script>
import QuickActions from '@/components/home/QuickActions.vue'
import Services from '@/components/home/Services.vue'
export default {
	name: 'Home',
	components: {
		QuickActions,
		Services
	},
}
</script>
