<template>
	<div>
		<div class="content">
			<NavigationBar />
			<div class="mb-5">
				<slot/>
			</div>
		</div>
		<BottomNavigation />
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import NavigationBar from '@/application/components/layouts/NavigationBar.vue'
import BottomNavigation from '@/application/components/layouts/BottomNavigation.vue'
export default defineComponent({
	components: {
		NavigationBar,
		BottomNavigation,
	},
})
</script>

<style lang="scss" scoped>
	.content{
		min-height: 95vh;
	}
</style>
