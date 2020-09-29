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
import Banner from '@app/components/home/Banner.vue'
import QuickActions from '@app/components/home/QuickActions.vue'
import UpcomingEvents from '@app/components/home/UpcomingEvents.vue'
import RecentArticles from '@app/components/home/RecentArticles.vue'
import Mission from '@app/components/home/Mission.vue'
import VisitUs from '@app/components/home/VisitUs.vue'
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
