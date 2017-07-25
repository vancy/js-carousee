<template>
  <div class="messages-dropdown" :class="{ 'visible': visible }">
    <div class="panel">
      <div class="header">
        <div class="left">{{ "Messages" | i18n }}</div>
        <div class="right"><a class="link" href="#"> <small>{{ "MarkAllAsRead" | i18n }}</small></a></div>
      </div>
      <div class="body">
        <div class="list">
          <div class="item"><img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/dustin/73.jpg"/>
            <div class="body"><strong>Message title <small class="text-muted">John Doe</small></strong>
              <p class="text-justify">Cupidatat eiusmod commodo excepteur velit magna. Aliqua eu tempor officia officia et ipsum magna sint cillum Lorem reprehenderit.</p>
            </div>
            <div class="footer text-right"><small class="text-muted">1 min ago</small></div>
          </div>
          <div class="item"><img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/connor_gaunt/73.jpg"/>
            <div class="body"><strong>Message title <small class="text-muted">John Doe</small></strong>
              <p class="text-justify">Laborum laboris nulla nisi labore.</p>
            </div>
            <div class="footer text-right"><small class="text-muted">3 min ago</small></div>
          </div>
        </div>
      </div>
      <div class="footer text-center"><a class="link" href="#">{{ "SeeAllMessages" | i18n }}</a></div>
    </div>
  </div>
</template>

<script>

	export default {

		props: [
			"visible"
		]

	};

</script>

<style lang="scss">
</style>
