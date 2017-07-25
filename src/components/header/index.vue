<template>
  <section class="page-header">
    <logo class="left"></logo>
    <div class="menu-toggle left" @click="toggleSidebar()"><i class="fa fa-bars"></i></div>
    <search-box class="left"></search-box>
    <user-box class="right"></user-box>
  </section>
</template>

<script>
	import Logo from "./logo";
	import SearchBox from "./search-box";
	import UserBox from "./user-box";

	export default {
		components: {
			Logo,
			SearchBox,
			UserBox
		},

		props: [
			"toggleSidebar"
		]

	};

</script>

<style lang="scss">
</style>
