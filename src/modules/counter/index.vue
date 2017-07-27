<template>
  <div class="container">
    <h2 class="title">{{ "Demo" | i18n }}</h2>
    <h3>Value: {{ count }}</h3>
    <button class="button success" @click="increment"> <span class="icon"><i class="fa fa-arrow-up"> </i></span><span>{{ "Increment" | i18n }}</span></button><br/><br/>
    <button class="button warning" @click="decrement"> <span class="icon"><i class="fa fa-arrow-up"> </i></span><span>{{ "Decrement" | i18n }}</span></button><br/><br/>
    <div class="panel primary">
      <div class="header"> <i class="fa fa-info-circle"> </i> Websocket demo</div>
      <div class="body">
        <p>This is a simple counter demo. You can increment & decrement the value with buttons. We use websocket for communication. The value is global, so you can see if somebody changed it.</p>
        <p>Try the following commands in the console of the browser:</p>
        <pre>counterService.emit("increment");
counterService.emit("set", { value: 50 });</pre>
      </div>
    </div>
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
			])
		},

		/**
		 * Socket handlers. Every property is an event handler
		 */
		socket: {
			prefix: "counter.",
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
