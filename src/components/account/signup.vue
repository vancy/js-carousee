<template>
	<div class="center-container">
  <div class="panel">
    <div class="bg"></div>
    <div class="bg-overlay"></div>
    <div class="content">
      <form action="/signup" method="POST">
        <input type="hidden" name="_csrf"/>
        <header>SignUp</header>
        <div class="form-group">
          <label for="name">NameSC</label>
          <input type="text" name="name" id="name" placeholder="YourName" autofocus="autofocus" required="required"/>
        </div>
        <div class="form-group">
          <label for="email">EmailSC</label>
          <input type="email" name="email" id="email" placeholder="YourEmail" required="required"/>
          <div class="hint"></div>
        </div>
        <div class="form-group">
          <label for="username">UsernameSC</label>
          <input type="text" name="username" id="username" placeholder="YourUsername"/>
          <div class="hint"></div>
        </div>
        <div class="form-group switch">
          <div>PasswordlessAccount</div>
          <input type="checkbox" name="passwordless" id="passwordless"/>
          <label for="passwordless"></label>
          <div class="hint"></div>
        </div>
        <div class="form-group">
          <label for="password">PasswordSC</label>
          <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <div class="form-group">
          <button class="signup" type="submit">SignUp</button>
        </div>
        <hr/>
        <div class="alreadyLink"><span>AlreadyHaveAnAccount</span><a href="/login">Login</a></div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss">
	@import "../scss/style.scss";
</style>
