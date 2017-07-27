<template>
  <div>
    <admin-page :schema="schema" :selected="selected" :rows="users"></admin-page><br/><br/>
    <div class="panel primary">
      <div class="header"> <i class="fa fa-info-circle"> </i> Table & Form demo</div>
      <div class="body">
        <p>This is an admin page demo. We use <a href="https://github.com/icebob/vue-form-generator" target="_blank">vue-form-generator</a> to generate form from schema. </p>
        <p>The table is also generated from schema. You can sort the rows & select multiple rows.</p>
        <p>If somebody changes a user, you will get a notification toast.</p>
      </div>
    </div>
  </div>
	
</template>

<script>
	import Vue from "vue";
	import AdminPage from "../../core/DefaultAdminPage.vue";
	import schema from "./schema";
	import toast from "../../core/toastr";

	import { mapGetters, mapActions } from "vuex";

	export default {

		components: {
			AdminPage: AdminPage
		},

		computed: mapGetters("users", [
			"users",
			"selected"
		]),

		/**
		 * Set page schema as data property
		 */
		data() {
			return {
				schema
			};
		},

		/**
		 * Socket handlers. Every property is an event handler
		 */
		socket: {

			prefix: "users.",

			events: {
				/**
				 * New user added
				 * @param  {Object} res User object
				 */
				created(res) {
					this.created(res.data);
					toast.success(this._("UserNameAdded", res), this._("UserAdded"));
				},

				/**
				 * User updated
				 * @param  {Object} res User object
				 */
				updated(res) {
					this.updated(res.data);
					toast.success(this._("UserNameUpdated", res), this._("UserUpdated"));
				},

				/**
				 * User removed
				 * @param  {Object} res Response object
				 */
				removed(res) {
					this.removed(res.data);
					toast.success(this._("UserNameDeleted", res), this._("UserDeleted"));
				}
			}
		},

		methods: {
			...mapActions("users", [
				"downloadRows",
				"created",
				"updated",
				"removed",
				"selectRow",
				"clearSelection",
				"saveRow",
				"updateRow",
				"removeRow"
			])
		},

		/**
		 * Call if the component is created
		 */
		created() {
			// Download rows for the page
			this.downloadRows();
		}
	};
</script>
