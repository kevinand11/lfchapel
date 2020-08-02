<template>
	<Default>
		<Banner />
		<QuickActions />
		<Mission />
		<UpcomingEvents />
		<RecentArticles />
		<VisitUs />
	</Default>
</template>

<script>
import Banner from '@/components/home/Banner.vue'
import QuickActions from '@/components/home/QuickActions.vue'
import UpcomingEvents from '@/components/home/UpcomingEvents.vue'
import RecentArticles from '@/components/home/RecentArticles.vue'
import Mission from '@/components/home/Mission.vue'
import VisitUs from '@/components/home/VisitUs.vue'
export default {
	name: 'Home',
	components: {
		Banner,
		QuickActions,
		UpcomingEvents,
		RecentArticles,
		VisitUs,
		Mission
	},
	meta(){
		return {
			title: 'Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
