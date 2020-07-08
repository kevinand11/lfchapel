<template>
	<div>
		<div id="background">
			<div class="container text-white">
				<h1>{{ $route.name }}</h1>
			</div>
		</div>
		<div class="container py-5">
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

<style>
	#background{
		background: url('../../assets/images/background.jpg');
		padding: 4rem 0;
	}
</style>

<script>
import SideNavigation from '@/components/about-us/SideNavigation.vue'
export default {
	components: {
		SideNavigation
	}
}
</script>
