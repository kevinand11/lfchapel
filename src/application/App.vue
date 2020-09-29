<template>
	<div>
		<router-view />
		<Modals />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Modals from '@app/components/modals/Base.vue'
export default defineComponent({
	components: {
		Modals
	}
})
</script>
