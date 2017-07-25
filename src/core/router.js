import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/help/Hello'
import Home from "@/modules/home"
// import Counter from "@/modules/counter"
// import Devices from "@/modules/devices"
// import Posts from "@/modules/posts"
// import Profile from "@/modules/profile"

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/hello',name: 'Hello', component: Hello },
		{ path: "/home", name: 'Home', component: Home }
		// { path: "/devices", name: 'Devices', component: Devices },
		// { path: "/posts", name: 'Posts', component: Posts },
		// { path: "/counter", name: 'Counter', component: Counter },
		// { path: "/profile", name: 'Profile', component: Profile }
		// { path: "/users", component: User, meta: { needRole: "admin" } },
		//{ path: "*", component: NotFound }
  ]
})
