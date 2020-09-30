<template>
	<div>
		<div @click="() => show = !show" class="d-flex justify-content-between cursor-pointer align-items-center
		    d-md-none bg-light p-3 mb-3 rounded">
			<h4>{{ $route.name }}</h4>
			<i class="fas" :class="show ? 'fa-angle-up' : 'fa-angle-down'"></i>
		</div>
		<ul class="list-group d-none d-md-block">
			<li class="list-group-item rounded-pill border border-danger mb-3" v-for="route in routes" :key="route.route">
				<router-link :to="route.route">{{ route.name }}</router-link>
			</li>
		</ul>
		<ul class="list-group d-md-none" v-if="show">
			<li class="list-group-item" v-for="route in routes" :key="route.route">
				<router-link :to="route.route">{{ route.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
export default defineComponent({
	props: {
		routes: {
			type: Array as PropType<{ name: string, link: string }[]>,
			required: true
		}
	},
	setup() {
		const show = ref(false)
		return { show }
	},
	watch: {
		'$route'(){
			this.show = false
		}
	}
})
</script>

<style lang="scss" scoped>
a{
	color: $black;
}
.router-link-exact-active{
	color: $gold;
	font-weight: bold;
}
</style>
