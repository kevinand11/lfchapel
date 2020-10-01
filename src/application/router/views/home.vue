<template>
	<Default>
		<Banner />
		<QuickActions />
		<Mission />
		<VisitUs />
	</Default>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Banner from '@app/components/home/Banner.vue'
import QuickActions from '@app/components/home/QuickActions.vue'
import Mission from '@app/components/home/Mission.vue'
import VisitUs from '@app/components/home/VisitUs.vue'
export default defineComponent({
	name: 'Home',
	components: {
		Banner,
		QuickActions,
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
})
</script>
