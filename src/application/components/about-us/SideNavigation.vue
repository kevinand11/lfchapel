<template>
	<div>
		<div @click="() => (show = !show)" class="d-flex justify-content-between cursor-pointer align-items-center
		    d-md-none bg-light p-3 mb-3 rounded">
			<h4>{{ $route.name }}</h4>
			<i class="fas" :class="show ? 'fa-angle-up' : 'fa-angle-down'"></i>
		</div>
		<ul class="list-group d-none d-md-block">
			<li class="list-group-item rounded-pill border border-danger mb-3">
				<router-link to="/about-us/our-church">Our Church</router-link>
			</li>
			<li class="list-group-item rounded-pill border border-danger mb-3">
				<router-link to="/about-us/rccg-the-church">RCCG - The Church</router-link>
			</li>
			<li class="list-group-item rounded-pill border border-danger mb-3">
				<router-link to="/about-us/the-general-overseer">The General Overseer</router-link>
			</li>
			<!--<li class="list-group-item">
				<router-link to="/about-us/our-pastor">Our Pastor</router-link>
			</li>-->
			<li class="list-group-item rounded-pill border border-danger mb-3">
				<router-link to="/about-us/mission-and-vision">Mission and Vision</router-link>
			</li>
			<li class="list-group-item rounded-pill border border-danger mb-3">
				<router-link to="/about-us/service-times">Service Times</router-link>
			</li>
		</ul>
		<ul class="list-group d-md-none" v-if="show">
			<li class="list-group-item">
				<router-link to="/about-us/our-church">Our Church</router-link>
			</li>
			<li class="list-group-item">
				<router-link to="/about-us/rccg-the-church">RCCG - The Church</router-link>
			</li>
			<li class="list-group-item">
				<router-link to="/about-us/the-general-overseer">The General Overseer</router-link>
			</li>
			<!--<li class="list-group-item">
				<router-link to="/about-us/our-pastor">Our Pastor</router-link>
			</li>-->
			<li class="list-group-item">
				<router-link to="/about-us/mission-and-vision">Mission and Vision</router-link>
			</li>
			<li class="list-group-item">
				<router-link to="/about-us/service-times">Service Times</router-link>
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
