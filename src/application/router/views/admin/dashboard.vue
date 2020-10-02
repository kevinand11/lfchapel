<template>
	<Admin>
		<RouteName />
		<div class="container px-3">
			<h2>Media</h2>
			<ul class="list-group">
				<li class="list-group-item list-group-item-action mb-3">
					<router-link to="/admin/media/pictures" class="d-flex justify-content-between align-items-center">
						<div>
							<h4>Pictures</h4>
							<p>Create, modify and delete pictures</p>
						</div>
						<i class="fas fa-2x fa-angle-right"></i>
					</router-link>
				</li>
				<li class="list-group-item list-group-item-action mb-3">
					<router-link to="/admin/media/audios" class="d-flex justify-content-between align-items-center">
						<div>
							<h4>Audios</h4>
							<p>Create, modify and delete audios</p>
						</div>
						<i class="fas fa-2x fa-angle-right"></i>
					</router-link>
				</li>
				<li class="list-group-item list-group-item-action mb-3">
					<router-link to="/admin/media/videos" class="d-flex justify-content-between align-items-center">
						<div>
							<h4>Videos</h4>
							<p>Create, modify and delete videos</p>
						</div>
						<i class="fas fa-2x fa-angle-right"></i>
					</router-link>
				</li>
			</ul>
			<hr class="mb-5">
			<h2>Forms</h2>
			<ul class="list-group">
				<li class="list-group-item list-group-item-action mb-3">
					<router-link to="/admin/forms/testimonies" class="d-flex justify-content-between align-items-center">
						<div>
							<h4>Testimonies</h4>
							<p>View and modify testimonies</p>
						</div>
						<i class="fas fa-2x fa-angle-right"></i>
					</router-link>
				</li>
			</ul>
			<hr class="mb-5">
			<h2>Events</h2>
			<ul class="list-group">
				<li class="list-group-item list-group-item-action mb-3">
					<router-link to="/admin/events" class="d-flex justify-content-between align-items-center">
						<div>
							<h4>Events</h4>
							<p>Create, modify and delete events</p>
						</div>
						<i class="fas fa-2x fa-angle-right"></i>
					</router-link>
				</li>
			</ul>
			<hr class="mb-5">
			<h2>Articles</h2>
			<ul class="list-group">
				<li class="list-group-item list-group-item-action mb-3">
					<router-link to="/admin/articles" class="d-flex justify-content-between align-items-center">
						<div>
							<h4>Blog Articles</h4>
							<p>Create, modify and delete articles for the blog</p>
						</div>
						<i class="fas fa-2x fa-angle-right"></i>
					</router-link>
				</li>
			</ul>
		</div>
	</Admin>
</template>

<style lang="scss" scoped>
a:hover { text-decoration: none; }
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
	name: 'Dashboard',
	meta(){
		return {
			title: 'Dashboard',
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
