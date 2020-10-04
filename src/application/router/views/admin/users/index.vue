<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<upgrade-user-to-admin />
		</div>
	</Admin>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import UpgradeUserToAdmin from '@app/components/admin/users/UpgradeUserToAdmin.vue'
export default defineComponent({
	name: 'Users',
	components: {
		'upgrade-user-to-admin': UpgradeUserToAdmin,
	},
	meta(){
		return {
			title: 'Users',
			meta: [
				{
					vmid: 'robots',
					name: 'robots',
					content: 'none'
				}
			]
		}
	}
})
</script>
