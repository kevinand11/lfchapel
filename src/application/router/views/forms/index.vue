<template>
	<Default>
		<RouteName />
		<div class="container">
			<div class="row">
				<div class="col-md-3 mb-3">
					<SideNavigation :routes="routes" />
				</div>
				<div class="col-md-9 mb-3">
					<router-view />
				</div>
			</div>
		</div>
	</Default>
</template>

<script>
export default {
	setup(){
		return {
			routes: [
				{ name: 'Make A Prayer Request', route: '/forms/prayer-requests' },
				{ name: 'Share A Testimony', route: '/forms/testimonies' },
				{ name: 'Give Us Feedback', route: '/forms/feedback' },
			]
		}
	},
	meta(){
		return {
			title: 'Forms - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
