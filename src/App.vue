<template>
  <div>
    <NavigationBar />
    <router-view class="pb-5"/>
    <BottomNavigation />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { provideAllPlugins } from '@/usecases/usePlugins'
import NavigationBar from '@/components/application/NavigationBar.vue'
import BottomNavigation from '@/components/application/BottomNavigation.vue'
export default defineComponent({
	components: {
	  NavigationBar,
	  BottomNavigation
	},
	setup(){
	  provideAllPlugins()
	}
})
</script>
