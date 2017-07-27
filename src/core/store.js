import Vue from "vue";
import Vuex from "vuex";

import session from "../modules/session/store";
import devices from "../modules/devices/store";
import users from "../modules/users/store";
import posts from "../modules/posts/store";
import counter from "../modules/counter/store";
import profile from "../modules/profile/store";

Vue.use(Vuex);

export default new Vuex.Store({
	state: { },
  actions: { },
  mutations: { },
  getters: { },
	modules: {
		session,
		counter,
		devices,
		users,
		posts,
		profile
	}
});
