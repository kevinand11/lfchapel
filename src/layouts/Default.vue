<template>
	<div>
		<NavigationBar />
		<slot class="pb-5"/>
		<BottomNavigation />
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import NavigationBar from '@/components/application/NavigationBar.vue'
import BottomNavigation from '@/components/application/BottomNavigation.vue'
export default defineComponent({
	components: {
		NavigationBar,
		BottomNavigation
	},
})
</script>
