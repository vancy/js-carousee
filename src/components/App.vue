<template>
	<div>
			<router-view keep-alive="keep-alive"></router-view>
	</div>
</template>

<script>
	import Vue from "vue";

	export default {
		watch: {
			$lng() {
				console.log("Language updated");
				this.update(this);
			}
		},

		created() {
			console.log("App started!");
			window.app = this;
		}
	};
</script>

<style lang="scss">
	@import "../scss/style.scss";
</style>
