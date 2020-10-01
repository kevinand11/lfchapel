<template>
	<div id="page">
		<div class="spinner-border text-info" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	div#page{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999999999999999;
		background: #00000088;
	}
	div.spinner-border{
		width: 3.5rem;
		height: 3.5rem;
	}
</style>
