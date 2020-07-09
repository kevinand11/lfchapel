<template>
	<div>
		<Carousel />
		<QuickActions />
		<Services />
		<Mission />
		<VisitUs />
	</div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'
import QuickActions from '@/components/home/QuickActions.vue'
import Services from '@/components/home/Services.vue'
import Mission from '@/components/home/Mission.vue'
import VisitUs from '@/components/home/VisitUs.vue'
export default {
	name: 'Home',
	components: {
		Carousel,
		QuickActions,
		Services,
		VisitUs,
		Mission
	},
}
</script>
