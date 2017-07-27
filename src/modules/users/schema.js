import Vue from "vue";
import moment from "moment";
import { deviceTypes } from "./types";
import { validators } from "vue-form-generator";
import { find } from "lodash";
import toastr from "../../core/toastr";
import Service from "../../core/service";

let service = new Service("users"); 

let _ = Vue.prototype._;

function colorForRole(role) {
	switch(role) {
	case "admin": return "danger";
	case "user": return "primary";
	default: return "";
	}
}

const RoleTypes = [
	{ id: "admin", name: "Administrator" },
	{ id: "user", name: "User" }
];

function resolveRoleName(role) {
	let r = RoleTypes.find(r => r.id == role);
	if (r)
		return r.name;

	return role;
}


module.exports = {

	id: "users",
	title: _("Users"),

	table: {
		multiSelect: true,
		columns: [
			{
				title: _("ID"),
				field: "code",
				align: "left",
				formatter(value, model) {
					return model ? model.code : "";
				}
			},
			{
				title: _("Username"),
				field: "username"
			},
			{
				title: _("FullName"),
				field: "fullName"
			},
			{
				title: _("Email"),
				field: "email"
			},
			{
				title: _("Roles"),
				field: "roles",
				formatter(value, model, col) {
					if (Array.isArray(value)) {
						return value.map(role => `<div class="tag ${colorForRole(role)}">${resolveRoleName(role)}</div>`).join("");
					}
				},
				align: "center"
			},
			{
				title: _("Verified"),
				field: "verified",
				formatter(value, model, col) {
					return value ? "<i class='fa fa-check'/>" : "<i class='fa fa-ban'/>";
				},
				align: "center"
			},
			{
				title: _("Status"),
				field: "status",
				formatter(value, model, col) {
					return value ? "<i class='fa fa-check'/>" : "<i class='fa fa-ban'/>";
				},
				align: "center"
			}
		],

		rowClasses: function(model) {
			return {
				inactive: !model.status
			};
		}

	},

	form: {
		fields: [
			{
				type: "input",
				inputType: "text",
				label: _("ID"),
				model: "code",
				readonly: true,
				disabled: true,
				multi: false,
				get(model) {
					if (model.code)
						return model.code;
					else
						return _("willBeGenerated");
				}
			},	
			{
				type: "input",
				inputType: "text",
				label: _("FullName"),
				model: "fullName",
				featured: true,
				required: true,
				placeholder: _("FullName"),
				validator: validators.string
			},	
			{
				type: "input",
				inputType: "text",
				label: _("Email"),
				model: "email",
				featured: true,
				required: true,
				placeholder: _("Email"),
				validator: validators.email
			},	
			{
				type: "checklist",
				label: _("roles"),
				model: "roles",
				listBox: true,
				values: RoleTypes,
				default: "user"
			},
			{
				type: "input",
				inputType: "text",
				label: _("Username"),
				model: "username",
				featured: true,
				required: true,
				placeholder: _("Username"),
				validator: validators.string
			},	
			{
				type: "switch",
				label: _("Verified"),
				model: "verified",
				multi: true,
				default: 0,
				textOn: _("Active"),
				textOff: _("Inactive"),
				valueOn: 1,
				valueOff: 0
			},
			{
				type: "input",
				inputType: "text",
				label: _("apiKey"),
				model: "apiKey",
				readonly: true,
				placeholder: _("apiKey"),
				validator: validators.string,
				get(model) {
					if (model.apiKey)
						{ return model.apiKey; } 
					else
					{
						return _("clickToGenerate");
					}
				},
				buttons: [
					{
						classes: "btn-ToBeCompleted",
						label: "Generate",
						onclick: function(model, field, event, self) {
							service.rest("generateApiKey")
							.then(apiKey => {
								Vue.set(model, "apiKey", apiKey);
							})
							.catch((err) => {
								toastr.error(err.message);
							});
						}
					}
				]
			},
			{
				type: "switch",
				label: _("Status"),
				model: "status",
				multi: true,
				default: 1,
				textOn: _("Active"),
				textOff: _("Inactive"),
				valueOn: 1,
				valueOff: 0
			}
		]
	},

	options: {
		searchable: true,


		enableNewButton: true,
		enabledSaveButton: true,
		enableDeleteButton: true,
		enableCloneButton: false,

		validateAfterLoad: false, // Validate after load a model
		validateAfterChanged: false, // Validate after every changes on the model
		validateBeforeSave: true // Validate before save a model
	},

	events: {
		onSelect: null,
		onNewItem: null,
		onCloneItem: null,
		onSaveItem: null,
		onDeleteItem: null,
		onChangeItem: null,
		onValidated(model, errors, schema) {
			if (errors.length > 0)
				console.warn("Validation error in page! Errors:", errors, ", Model:", model);
		}
	},

	resources: {
		addCaption: _("AddNewUser"),
		saveCaption: _("Save"),
		cloneCaption: _("Clone"),
		deleteCaption: _("Delete")
	}

};