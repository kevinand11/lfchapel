<template>
	<Default>
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
	</Default>
</template>

<script>
import SideNavigation from '@/components/forms/SideNavigation.vue'
export default {
	components: {
		SideNavigation
	},
	meta(){
		return {
			title: 'Online Forms - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
