<template>
  <div class="center-container">
    <div class="panel">
      <div class="bg"></div>
      <div class="bg-overlay"></div>
      <div class="content">
        <form method="POST">
          <input type="hidden" name="_csrf"/>
          <header>Forgot</header>
          <p>ForgotHint</p>
          <div class="form-group">
            <label for="email">EmailSC</label>
            <input class="form-control" type="email" name="email" id="email" placeholder="Email" autofocus="autofocus"/>
          </div>
          <div class="form-group">
            <button type="submit">ResetPassword</button>
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
