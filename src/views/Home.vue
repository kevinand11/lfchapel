<template>
	<div>
		<Carousel />
		<QuickActions />
		<Services />
		<Mission />
	</div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'
import QuickActions from '@/components/home/QuickActions.vue'
import Services from '@/components/home/Services.vue'
import Mission from '@/components/home/Mission.vue'
export default {
	name: 'Home',
	components: {
		Carousel,
		QuickActions,
		Services,
		Mission
	},
}
</script>
