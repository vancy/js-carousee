<template>
  <ul class="dropdown-menu user-menu" :class="{ 'visible': visible }">
    <router-link tag="li" to="/profile"><a>
        <div class="icon"><i class="fa fa-user"></i></div>{{ "MyAccount" | i18n }}</a></router-link>
    <router-link tag="li" to="/settings"><a>
        <div class="icon"><i class="fa fa-cog"></i></div>{{ "Settings" | i18n }}</a></router-link>
    <li class="separator"></li>
    <li><a href="/logout">
        <div class="icon"><i class="fa fa-power-off"></i></div>{{ "Logout" | i18n }}</a></li>
  </ul>
</template>

<script>

	export default {

		props: [
			"visible"
		]

	};

</script>

<style lang="scss">
</style>
