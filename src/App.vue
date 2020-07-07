<template>
	<div>
		<NavigationBar />
		<router-view/>
	</div>
</template>

<script>
import NavigationBar from '@/components/application/NavigationBar.vue'
export default {
	components: {
		NavigationBar
	}
}
</script>
