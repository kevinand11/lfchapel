<template>
	<div>
		<Carousel />
		<QuickActions />
		<Services />
	</div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'
import QuickActions from '@/components/home/QuickActions.vue'
import Services from '@/components/home/Services.vue'
export default {
	name: 'Home',
	components: {
		Carousel,
		QuickActions,
		Services
	},
}
</script>
