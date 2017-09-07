<template>
	<div class="center-container">
  <div class="panel">
    <div class="bg"></div>
    <div class="bg-overlay"></div>
    <div class="content">
        <input type="hidden" name="_csrf"/>
        <header>SignUp</header>
        <div class="form-group">
          <label for="username">User Name</label>
          <input type="text" v-model="username" id="name" placeholder="YourUsername" autofocus="autofocus" required="required"/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" placeholder="YourEmail" required="required"/>
          <div class="hint"></div>
        </div>
        <div class="form-group">
          <label for="real name">Real Name</label>
          <input type="text" v-model="realName" id="username" placeholder="Your Real Name" required="required"/>
          <div class="hint"></div>
        </div>
				<div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password1" placeholder="Password" required="required"/>
        </div>
        <div class="form-group">
          <label for="password">Comfirm Password</label>
          <input type="password" v-model="passwordConfirm" id="password2" placeholder="Password" required="required"/>
        </div>
        <div class="form-group">
          <button class="signup" @click="registration"> SignUp </button>
        </div>
        <hr/>
        <div class="alreadyLink"><span>Already Have An Account?</span><a href="/login">Login</a></div>
    </div>
  </div>
</div>
</template>

<script>
	import toast from "../../core/toastr";
	import axios from 'axios';

	//import Service from "../../core/service";
	//let service = new Service('http://localhost:8080/signup');
	export default {
    data(){
			return{
        username: '',
				email: '',
				password: '',
				passwordConfirm: '',
				realName: '',
        ajaxRequest: false,
        postResults: []
			}
    },
    methods: {
      registration: function() {
        this.ajaxRequest = true;
				if (this.password !== this.passwordConfirm) {
					toast.error('Your password does not match');
					return;
				}
        axios.post('http://localhost:8080/signup', {
						'username': this.username,
						'email': this.email,
						'realName': this.realName,
						'password': this.password
				})
					.then(function (response) {
    				toast.success(response);
  				}).catch(function (error) {
    				toast.error(error);
  				});
      }
		}
	}
</script>

<style lang="scss">
	@import "../../scss/frontend.scss";
</style>
