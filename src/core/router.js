import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/help/Hello'
import Style from '@/components/help/Style'
// import Counter from "@/modules/counter"
// import Devices from "@/modules/devices"
// import Posts from "@/modules/posts"
import Profile from "@/modules/profile"

Vue.use(Router)
const routes = [
  { path: '/hello',name: 'Hello', component: Hello },
  { path: '/style', name: 'Style', component: Style },
  // { path: "/devices", name: 'Devices', component: Devices },
  // { path: "/posts", name: 'Posts', component: Posts },
  // { path: "/counter", name: 'Counter', component: Counter },
  { path: "/profile", name: 'Profile', component: Profile }
  // { path: "/users", component: User, meta: { needRole: "admin" } },
  //{ path: "*", component: NotFound }
];
export default new Router({
  routes,
  //use history mode to make # invisible
  mode: "history"
})
