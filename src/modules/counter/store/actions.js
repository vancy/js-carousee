import Vue from "vue";

import Service from "../../../core/service";

let service = new Service("counter", this);

export const getValue = function (ctx) {
	service.rest("get").then(data => {
		console.log("Counter current value: ", data);
		ctx.commit("CHANGED_VALUE", data);
	});
};

export const increment = function ({ commit }) {
	service.rest("increment").then(newValue => {
		commit("CHANGED_VALUE", newValue);
	});
};

export const decrement = function ({ commit }) {
	service.rest("decrement").then(newValue => {
		commit("CHANGED_VALUE", newValue);
	});
};

export const changedValue = function ({ commit }, newValue) {
	commit("CHANGED_VALUE", newValue);
};
