<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { provideAllPlugins } from '@/usecases/usePlugins'
export default defineComponent({
	setup(){
	  provideAllPlugins()
	}
})
</script>
