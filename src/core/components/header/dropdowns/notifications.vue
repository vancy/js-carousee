<template>
  <div class="notification-dropdown" :class="{ 'visible': visible }">
    <div class="panel">
      <div class="header">
        <div class="left">{{ "Notifications" | i18n }}</div>
        <div class="right"><a class="link" href="#"> <small>{{ "MarkAllAsRead" | i18n }}</small></a></div>
      </div>
      <div class="body">
        <div class="list">
          <div class="item"><img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/dustin/73.jpg"/>
            <div class="body">
              <p class="text-justify"> <strong>Thomas </strong>posted a new article</p>
            </div>
            <div class="footer text-right"><small class="text-muted">1 min ago</small></div>
          </div>
          <div class="item"><img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/connor_gaunt/73.jpg"/>
            <div class="body">
              <p class="text-justify"> <strong>Adam </strong>changed his contact information</p>
            </div>
            <div class="footer text-right"><small class="text-muted">3 min ago</small></div>
          </div>
          <div class="item"><img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg"/>
            <div class="body">
              <p class="text-justify"> <strong>Samantha </strong>replied to your comment</p>
            </div>
            <div class="footer text-right"><small class="text-muted">15 min ago</small></div>
          </div>
          <div class="item"><img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/ritu/73.jpg"/>
            <div class="body">
              <p class="text-justify"> <strong>Bill </strong>bought a new TV</p>
            </div>
            <div class="footer text-right"><small class="text-muted">3 hours ago</small></div>
          </div>
          <div class="item"><img class="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/sauro/73.jpg"/>
            <div class="body">
              <p class="text-justify"> <strong>Chris </strong>posted a new blog post</p>
            </div>
            <div class="footer text-right"><small class="text-muted">1 day ago</small></div>
          </div>
        </div>
      </div>
      <div class="footer text-center"><a class="link" href="#">{{ "SeeAllNotifications" | i18n }}</a></div>
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
