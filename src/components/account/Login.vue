<template>
<div class="center-container">
  <div class="panel">
    <div class="bg"></div>
    <div class="bg-overlay"></div>
    <div class="content">
      <form action="/login" method="POST">
        <input type="hidden" name="_csrf"/>
        <header>Login</header>
        </hr>
        <div class="form-group">
          <label for="username">Your username or email:</label>
          <input type="text" name="username" id="username" placeholder="username"/>
          <div class="hint"></div>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" placeholder="password"/>
        </div>
        <div class="form-option">
          <input id="rememberme" type="checkbox"/>
          <label for="rememberme">remember me</label>
        </div>
        <div class="form-group">
          <div class="hint">click signup to login</div>
          <button class="signup" type="submit">Login</button>
        </div>
      </form>
      <div class="or"> <span>or</span> </div>
      <div class="socials">
        <a class="fa fa-facebook" href="/auth/facebook" title="Login via Facebook"></a>
        <a class="fa fa-google" href="/auth/google" title="Login via Google"></a>
        <a class="fa fa-twitter" href="/auth/twitter" title="Login via Twitter"></a>
        <a class="fa fa-weixin" href="/auth/weixin" title="Login via Wechat"></a>
        <a class="fa fa-weibo" href="/auth/weibo" title="Login via Weibo"></a>
      </div>
      <div class="form-group"> </hr> </div>
      <div class="alreadyLink"><span>Don't Have An Account?</span><a href="/signup">Sign Up</a></div>
    </div>
  </div>
</div>

</template>


<script>
</script>

<style lang="scss">
	@import "../../scss/frontend.scss";
</style>
