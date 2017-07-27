<template>
<div class="container">
  <div class="profile flex row align-stretch"><img class="avatar" :src="profile.avatar"/>
    <div class="details flex-item-1">
      <div class="name">{{ profile.fullName }}<span class="text-muted username">({{ profile.username }})</span></div>
      <div class="tags">
        <div class="tag primary">!Role name!</div>
        <div class="tag danger">!Administrator!</div>
        <div class="tag success">!Online!</div>
      </div>
      <div class="description">
        <div class="info-row" v-if="profile.profile &amp;&amp; profile.profile.location"><i class="fa fa-map-marker"></i><span class="caption">Location:</span><span class="value">{{ profile.profile.location }}</span></div>
        <div class="info-row"><i class="fa fa-clock-o"></i><span class="caption">Last login:</span><span class="value">!Online!</span></div>
        <div class="info-row"><i class="fa fa-calendar"></i><span class="caption">Joined:</span><span class="value">{{ profile.createdAt | ago }}							</span></div>
      </div>
      <hr class="full"/>
    </div>
  </div>
  <pre v-html="this.$options.filters.prettyJSON(profile)"></pre>
</div>

</template>

<script>
	import Service from "../../core/service";

	import { mapGetters, mapActions } from "vuex";

	export default {
		computed: mapGetters("profile", [
			"profile"
		]),

		methods: {
			...mapActions("profile", [
				"getProfile"
			])
		},

		created() {
			this.$service = new Service("profile", this);

			// Get my profile
			this.getProfile();
		}
	};

</script>

<style lang="scss" scoped>

	@import "../../../scss/themes/blurred/variables";
	@import "../../../scss/common/mixins";

	.container {
		padding: 1rem;
	}

	.profile {
		position: relative;
		$avatarSize: 6em;

		.avatar {
			width: $avatarSize;
			height: $avatarSize;
			border-radius: $avatarSize / 2;
			margin: 0.8em 2em 0 0;

		} // .avatar

		.details {
			// margin-bottom: 1em;

			.name {
				font-weight: 300;
				font-size: 2.5em;
				line-height: 1.3em;
				font-family: $fontFamilyHeader;

				.username {
					font-size: 0.7em;
					margin-left: 0.3em;
				}

			} // .name

			.tags {
				font-size: 1.1em;
			}

			.description {
				margin-top: 0.6em;
				line-height: 1.3em;
				font-size: 0.9em;

				.info-row {
					font-size: 0.9em;
					line-height: 1.3em;

					i {
						width: 1.5em;
					}

					.caption {
						display: inline-block;
						width: 5em;
					}

					.value {
						margin-left: 0.5em;
						color: $textColor;
						font-weight: 400;
					}

				} // .info-row

			} // .description

		} // .details

	} // .profile

</style>
