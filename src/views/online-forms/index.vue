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
import RouteName from '@/components/application/RouteName.vue'
import SideNavigation from '@/components/online-forms/SideNavigation.vue'
export default {
	components: {
		RouteName,
		SideNavigation
	}
}
</script>
