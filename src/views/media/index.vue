<template>
	<div>
		<RouteName />
		<div class="container">
			<div class="row">
				<div class="col-md-3 mb-3">
					<SideNavigation />
				</div>
				<div class="col-md-9 mb-3">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SideNavigation from '@/components/media/SideNavigation.vue'
export default {
	components: {
		SideNavigation
	},
	meta(){
		return {
			title: 'Media - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
