<template>
	<Default>
		<Banner />
		<QuickActions />
		<Mission />
		<UpcomingEvents class="d-none" />
		<RecentArticles class="d-none" />
		<VisitUs />
	</Default>
</template>

<script>
import Banner from '@/application/components/home/Banner.vue'
import QuickActions from '@/application/components/home/QuickActions.vue'
import UpcomingEvents from '@/application/components/home/UpcomingEvents.vue'
import RecentArticles from '@/application/components/home/RecentArticles.vue'
import Mission from '@/application/components/home/Mission.vue'
import VisitUs from '@/application/components/home/VisitUs.vue'
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
