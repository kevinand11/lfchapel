<template>
	<div>
		<div @click="() => (show = !show)" class="d-flex justify-content-between cursor-pointer align-items-center
		    d-md-none bg-light p-3 mb-3 rounded">
			<h4>{{ $route.name }}</h4>
			<i class="fas" :class="show ? 'fa-angle-up' : 'fa-angle-down'"></i>
		</div>
		<ul class="list-group d-none d-md-block">
			<li class="list-group-item">
				<router-link to="/forms/prayer-requests">Prayer Requests</router-link>
			</li>
			<li class="list-group-item">
				<router-link to="/forms/testimonies">Testimonies</router-link>
			</li>
			<li class="list-group-item">
				<router-link to="/forms/feedback">Feedback</router-link>
			</li>
		</ul>
		<ul class="list-group d-md-none" v-if="show">
			<li class="list-group-item">
				<router-link to="/forms/prayer-requests">Prayer Requests</router-link>
			</li>
			<li class="list-group-item">
				<router-link to="/forms/testimonies">Testimonies</router-link>
			</li>
			<li class="list-group-item">
				<router-link to="/forms/feedback">Feedback</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	data: () => ({
	    show: false
	}),
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
		color: $red;
		font-weight: bold;
	}
</style>
