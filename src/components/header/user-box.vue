<template>
<div class="user-box" v-if="me">
	<div class="user-info right" @click="toggleUserMenu()"><img class="avatar" :src="me.avatar"/>
		<div class="username">{{ me.fullName }}</div><i class="fa fa-chevron-down"></i>
	</div>
	<user-dropdown :visible="expandedUserMenu"></user-dropdown>
	<div class="notification-box right">
		<ul class="icons">
			<li @click="toggleNotifications()" :class=" { active: notifications.length &gt; 0 }"><i class="fa fa-bell-o"></i><span>{{ notifications.length }}</span>
				<div class="ring"></div>
			</li>
			<li @click="toggleMessages()" :class=" { active: messages.length &gt; 0 }"><i class="fa fa-envelope-o"></i><span>{{ messages.length }}</span>
				<div class="ring"></div>
			</li>
		</ul>
		<notifications-dropdown :visible="expandedNotifications"></notifications-dropdown>
		<messages-dropdown :visible="expandedMessages"></messages-dropdown>
		<div class="copyright">&copy; Copyright, 2016</div>
	</div>
</div>
</template>

<script>
	import UserDropdown from "./dropdowns/user";
	import NotificationsDropdown from "./dropdowns/notifications";
	import MessagesDropdown from "./dropdowns/messages";

	import { mapActions, mapGetters } from "vuex";

	export default {
		computed: mapGetters("session", [
			"me",
			"notifications",
			"messages"
		]),

		components: {
			UserDropdown,
			NotificationsDropdown,
			MessagesDropdown
		},

		data() {
			return {
				expandedUserMenu: false,
				expandedNotifications: false,
				expandedMessages: false
			};
		},

		methods: {

			toggleUserMenu() {
				this.expandedUserMenu = !this.expandedUserMenu;
				if (this.expandedUserMenu) {
					this.expandedMessages = false;
					this.expandedNotifications = false;
				}
			},

			toggleMessages() {
				this.expandedMessages = !this.expandedMessages;
				if (this.expandedMessages) {
					this.expandedUserMenu = false;
					this.expandedNotifications = false;
				}
			},

			toggleNotifications() {
				this.expandedNotifications = !this.expandedNotifications;
				if (this.expandedNotifications) {
					this.expandedMessages = false;
					this.expandedUserMenu = false;
				}
			}

		}

	};

</script>

<style lang="scss">
</style>
