<template>
	<div>
		<NavigationBar />
		<router-view class="pb-5"/>
		<BottomNavigation />
	</div>
</template>

<script>
import NavigationBar from '@/components/application/NavigationBar.vue'
import BottomNavigation from '@/components/application/BottomNavigation.vue'
export default {
	components: {
		NavigationBar,
		BottomNavigation
	}
}
</script>
