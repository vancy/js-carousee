<template>
<div class="center-container">
  <div class="panel">
    <div class="bg"></div>
    <div class="bg-overlay"></div>
    <div class="content">
      <form action="/auth/local" method="POST">
        <input type="hidden" name="_csrf"/>
        <header>Login</header>
        <div class="form-group">
          <label for="username">UsernameOrEmail</label>
          <input type="text" name="username" id="username" placeholder="YourUsernameOrEmailAddress"/>
          <div class="hint"></div>
        </div>
        <div class="form-group">
          <label for="password">PasswordSC</label>
          <input type="password" name="password" id="password" placeholder="Password"/>
          <div class="hint">PasswordlessLoginHint</div>
        </div>
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
