<template>
<aside class="nav" :class="{ mini: minimized }">
	<div class="menu">
		<div class="title">{{ "General" | i18n }}</div>
		<ul>
			<router-link tag="li" to="/hello"><a :title="_('Hello')"><span class="icon"><i class="fa fa-home"></i></span><span class="label">{{ "Hello" | i18n }}</span></a></router-link>
			<router-link tag="li" to="/style"><a :title="_('Style')"><span class="icon"><i class="fa fa-css3"></i></span><span class="label">{{ "Style" | i18n }}</span></a></router-link>
			<router-link tag="li" to="/counter"><a :title="_('Demo')"><span class="icon"><i class="fa fa-tasks"></i></span><span class="label">{{ "Demo" | i18n }}</span></a></router-link>
			<router-link tag="li" to="/devices"><a :title="_('Devices')"><span class="icon"><i class="fa fa-tablet"></i></span><span class="label">{{ "Devices" | i18n }}</span></a></router-link>
			<router-link tag="li" to="/posts"><a :title="_('Posts')"><span class="icon"><i class="fa fa-comments"></i></span><span class="label">{{ "Posts" | i18n }}</span></a></router-link>
		</ul>
		<div class="title">{{ "Profile" | i18n }}</div>
		<ul>
			<li><a href="/logout" :title="_('Logout')"><span class="icon"><i class="fa fa-sign-out"></i></span><span class="label">{{ "Logout" | i18n }}</span></a></li>
		</ul>
	</div>
	<div class="footer">
		<div class="social"><a href="" target="_blank"><i class="fa fa-facebook"></i></a><a href="https://twitter.com/Icebobcsi" target="_blank"><i class="fa fa-twitter"></i></a><a href="https://github.com/icebob/vue-express-mongo-boilerplate" target="_blank"><i class="fa fa-github"></i></a></div>
		<div class="copyright">Xing &copy; Copyright, 2017</div>
	</div>
</aside>
</template>

<script>

	export default {
		props: [
			"minimized"
		]
	};

</script>

<style lang="scss">
</style>
