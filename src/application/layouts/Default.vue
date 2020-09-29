<template>
	<div>
		<div class="content">
			<NavigationBar />
			<div class="mb-5">
				<slot/>
			</div>
		</div>
		<BottomCurve />
		<BottomNavigation />
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import BottomCurve from '@app/components/application/BottomCurve'
import NavigationBar from '@app/components/application/NavigationBar.vue'
import BottomNavigation from '@app/components/application/BottomNavigation.vue'
export default defineComponent({
	components: {
		NavigationBar,
		BottomNavigation,
		BottomCurve
	},
})
</script>

<style lang="scss" scoped>
	.content{
		min-height: 95vh;
	}
</style>
