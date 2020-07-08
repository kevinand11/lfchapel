<template>
	<ul class="list-group">
		<li class="list-group-item">
			<router-link to="/online-forms/ask-our-pastor">Ask Our Pastor</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/online-forms/membership">Membership</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/online-forms/prayer-requests">Prayer Requests</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/online-forms/testimonies">Testimonies</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/online-forms/need-a-ride">Need A Ride</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/online-forms/invite-a-friend">Invite A Friend</router-link>
		</li>
		<li class="list-group-item">
			<router-link to="/online-forms/feedback">Feedback</router-link>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	@import "~@/assets/style/index.scss";
	a{
		color: $black;
	}
	.router-link-exact-active{
		color: $red;
		font-weight: bold;
	}
</style>
