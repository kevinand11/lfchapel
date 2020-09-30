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
				{ name: 'Our Church', route: '/about-us/our-church' },
				{ name: 'RCCG - The Church', route: '/about-us/rccg-the-church' },
				{ name: 'The General Overseer', route: '/about-us/the-general-overseer' },
				//{ name: 'Our Pastor', route: '/about-us/our-pastor' },
				{ name: 'Mission and Vision', route: '/about-us/mission-and-vision' },
				{ name: 'Service Times', route: '/about-us/service-times' },
			]
		}
	},
	meta(){
		return {
			title: 'About Us - Living Faith Chapel',
			meta: [
				{ vmid: 'description', name: 'description', content: '' },
				{ vmid: 'keywords', name: 'keywords', content: '' },
			]
		}
	}
}
</script>
