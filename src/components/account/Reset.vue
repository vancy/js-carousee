<template>
	<div class="center-container">
	  <div class="panel">
	    <div class="bg"></div>
	    <div class="bg-overlay"></div>
	    <div class="content">
	      <form method="POST">
	        <input type="hidden" name="_csrf"/>
	        <header>Reset Password</header>
	        <div class="form-group">
	          <label for="password">NewPassword</label>
	          <input class="form-control" type="password" name="password" id="password" placeholder="NewPassword" autofocus="autofocus" required="required"/>
	        </div>
	        <div class="form-group">
	          <label for="confirm">ConfirmPassword</label>
	          <input class="form-control" type="password" name="confirm" id="confirm" placeholder="ConfirmPassword" required="required"/>
	        </div>
	        <div class="form-group">
	          <button type="submit">ChangePassword</button>
	        </div>
	      </form>
	    </div>
	  </div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import "../../scss/frontend.scss";
</style>
