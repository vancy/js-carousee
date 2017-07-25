<template>
  <div class="container"></div>
  <h3 class="title">{{ schema.title }}</h3>
  <div class="flex align-center justify-space-around">
    <div class="left" v-if="enabledNew">
      <button class="button is-primary" @click="newModel"><i class="icon fa fa-plus"> </i>{{ schema.resources.addCaption || _("Add") }}</button>
    </div>
    <div class="right">{{ _("SelectedOfAll", { selected: selected.length, all: rows.length } ) }}</div>
  </div>
  <data-table :schema="schema.table" :rows="rows" :order="order" :search="search" :selected="selected" :select="select" :select-all="selectAll"></data-table>
  <div class="form" v-if="model">
    <vue-form-generator :schema="schema.form" :model="model" :options="options" :multiple="selected.length &gt; 1" ref="form" :is-new-model="isNewModel"></vue-form-generator>
    <div class="errors text-center">
      <div class="alert alert-danger" v-for="(item, index) in validationErrors" :key="index">{{ item.field.label }}: <strong>{{ item.error }}</strong></div>
    </div>
    <div class="buttons flex justify-space-around">
      <button class="button primary" @click="saveModel" :disabled="!enabledSave"><i class="icon fa fa-save"> </i>{{ schema.resources.saveCaption || _("Save") }}</button>
      <button class="button outline" @click="cloneModel" :disabled="!enabledClone"><i class="icon fa fa-copy"> </i>{{ schema.resources.cloneCaption || _("Clone") }}</button>
      <button class="button danger" @click="deleteModel" :disabled="!enabledDelete"><i class="icon fa fa-trash"> </i>{{ schema.resources.deleteCaption || _("Delete") }}</button>
    </div>
  </div>
</template>

<script>
	import Vue from "vue";
	import { schema as schemaUtils } from "vue-form-generator";
	import DataTable from "./dataTable.vue";

	import { each, find, cloneDeep, isFunction } from "lodash";

	import { mapGetters, mapActions } from "vuex";

	export default {

		components: {
			DataTable
		},

		props: [
			"schema",
			"selected",
			"rows"
		],

		data() {
			return {
				order: {
					field: "id",
					direction: 1
				},

				model: null,
				isNewModel: false
			};
		},

		computed: {
			...mapGetters("session", {
				search: "searchText"
			}),

			options() 		{ return this.schema.options || {};	},

			enabledNew() 	{ return (this.options.enableNewButton !== false); },
			enabledSave() 	{ return (this.model && this.options.enabledSaveButton !== false); },
			enabledClone() 	{ return (this.model && !this.isNewModel && this.options.enableDeleteButton !== false); },
			enabledDelete() { return (this.model && !this.isNewModel && this.options.enableDeleteButton !== false); },

			validationErrors() {
				if (this.$refs.form && this.$refs.form.errors)
					return this.$refs.form.errors;

				return [];
			}
		},

		watch: {
			selected() {
				if (!this.isNewModel)
					this.generateModel();
			}

			/*
			model: {
				handler: function(newVal, oldVal) {
					if (newVal === oldVal) // call only if a property changed, not the model
						console.log("Model property changed!");
				},
				deep: true
			}*/
		},

		methods: {

			select(event, row, add) {
				this.isNewModel = false;

				if (this.schema.table.multiSelect === true && (add || (event && event.ctrlKey))) {
					this.$parent.selectRow(row, true);
				} else {
					this.$parent.selectRow(row, false);
				}
			},

			selectAll(event) {
				this.isNewModel = false;

				let filter = Vue.filter("filterBy");
				let filteredRows = filter(this.rows, this.search);

				if (this.selected.length < filteredRows.length) {
					// Select all
					this.$parent.selectRow(filteredRows, false);
				} else {
					// Unselect all
					this.$parent.clearSelection();
				}
			},

			generateModel() {
				if (this.selected.length == 1) {
					this.model = cloneDeep(this.selected[0]);
				}
				else if (this.selected.length > 1) {
					this.model = schemaUtils.mergeMultiObjectFields(this.schema.form, this.selected);
				}
				else
					this.model = null;
			},

			newModel() {
				console.log("Create new model...");

				this.$parent.clearSelection();

				let newRow = schemaUtils.createDefaultObject(this.schema.form);
				this.isNewModel = true;
				this.model = newRow;

				this.$nextTick(() => {
					let el = document.querySelector("div.form input:nth-child(1):not([readonly]):not(:disabled)");
					if (el)
						el.focus();
				});
			},

			cloneModel() {
				console.log("Clone model...");
				let baseModel = this.model;
				this.$parent.clearSelection();

				let newRow = cloneDeep(baseModel);
				newRow.id = null;
				newRow.code = null;
				this.isNewModel = true;
				this.model = newRow;
			},

			saveModel() {
				console.log("Save model...");
				if (this.options.validateBeforeSave === false ||  this.validate()) {

					if (this.isNewModel)
						this.$parent.saveRow(this.model);
					else
						this.$parent.updateRow(this.model);

				} else {
					// Validation error
				}
			},

			deleteModel() {
				if (this.selected.length > 0) {
					each(this.selected, (row) => this.$parent.removeRow(row) );
					this.$parent.clearSelection();
				}
			},

			validate()	{
				let res = this.$refs.form.validate();

				if (this.schema.events && isFunction(this.schema.events.onValidated)) {
					this.schema.events.onValidated(this.model, this.$refs.form.errors, this.schema);
				}

				if (!res) {
					// Set focus to first input with error
					this.$nextTick(() => {
						let el = document.querySelector("div.form tr.error input:nth-child(1)");
						if (el)
							el.focus();
					});
				}

				return res;
			}

		},

		created() {
		}

	};

</script>

<style lang="scss" scoped>
	@import "../../scss/common/mixins";

	.container {
		padding: 1rem;
	}

	.form {
		margin: 1rem 0;

		@include bgTranslucentDark(0.2);
		border-radius: 8px;

		.buttons {
			max-width: 400px;
			padding: 0.5em;
		}

	}
</style>
