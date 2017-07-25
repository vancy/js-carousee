<template>
  <div class="container">
    <h2 class="title">{{ "Demo" | i18n }}</h2>
    <h3>{{ count }}</h3>
    <button class="button success" @click="inc"> <span class="icon"><i class="fa fa-arrow-up"> </i></span><span>{{ "Increment" | i18n }}</span></button><br/><br/>
    <button class="button warning" @click="dec"> <span><i class="fa fa-arrow-up"> </i></span><span>{{ "Decrement" | i18n }}</span></button>
  </div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	import Service from "../../core/service";

	export default {
		/**
		 * Computed getters
		 */
		 computed: mapGetters("counter", [
			 "count"
		 ]),

		/**
		 * Page methods
		 */
		methods: {
			/**
			 * Actions from store
			 */
			...mapActions("counter", [
				"getValue",
				"increment",
				"decrement",
				"changedValue"
			]),

			/**
			 * Increment counter
			 */
			inc() {
				this.increment();
			},

			/**
			 * Decrement counter
			 */
			dec() {
				this.decrement();
			}
		},

		/**
		 * Socket handlers. Every property is an event handler
		 */
		socket: {

			prefix: "/counter/",

			//namespace: "/counter",

			events: {
				/**
				 * Counter value is changed
				 * @param  {Number} msg Value of counter
				 */
				changed(res) {
					console.log("Counter changed to " + res.data + (res.user ? " by " + res.user.fullName : ""));
					this.changedValue(res.data);
				}
			}
		},

		created() {
			this.$service = new Service("counter", this);

			// Get the latest value of counter
			this.getValue();
		}
	};

</script>

<style lang="scss" scoped>
</style>
