<template>
	<div id="content">
		<router-view />
		<Modals />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Modals from '@app/components/modals/Base.vue'
export default defineComponent({
	name: 'App',
	components: {
		Modals
	}
})
</script>

<style lang="scss" scoped>
#content{
	max-width: 1800px;
	margin: 0 auto;
}
</style>
