<template>
	<div>
		<page-header :toggle-sidebar="toggleSidebar"></page-header>
		<sidebar :minimized="miniSidebar"></sidebar>
		<section class="app-main" :class="{ miniSidebar: miniSidebar }">
			<router-view keep-alive="keep-alive"></router-view>
		</section>
	</div>
</template>

<script>
	import Vue from "vue";

	import PageHeader from "./header/index";
	import Sidebar from "./sidebar/index";

	import { mapActions, mapGetters } from "vuex";

	export default {

		components: {
			PageHeader,
			Sidebar
		},

		data() {
			return {
				miniSidebar: false
			};
		},

		watch: {
			$lng() {
				console.log("Language updated");
				this.update(this);
			}
		},

		methods: {
			...mapActions({
				"getSessionUser": "session/getSessionUser"
			}),

			update: function(vm) {
				if (vm == null)
					return;

				let i = vm._watchers.length;
				while (i--)
					vm._watchers[i].update(true);

				let children = vm.$children;
				i = children.length;
				while (i--)
					this.update(children[i]);
			},

			toggleSidebar() {
				this.miniSidebar = !this.miniSidebar;
			}
		},


		created() {
			console.log("App started!");
			window.app = this;
			this.getSessionUser();

		}
	};
</script>

<style lang="scss">
	@import "../scss/style.scss";
</style>
