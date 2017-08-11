<template>
<div class="search-box"><i class="fa fa-search"></i>
	<input type="search" v-model="text" placeholder="Search does not work"/>
</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";

	export default {
		computed: {
			...mapGetters("session", [
				"searchText"
			]),
			text: {
				get() {
					return this.searchText;
				},

				set(value) {
					this.searching(value);
				}
			}
		},

		methods: {
			...mapActions("session", [
				"searching"
			])
		}
	};

</script>

<style lang="scss">
</style>
