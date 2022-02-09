<template>
  <div class="navbar">
    <div id="nav">
      <div class="logo">
        <img
          src="https://cdn.discordapp.com/attachments/932033611920736316/933421635241918474/logo.png"
        />
      </div>
      <div class="logo-text" style="margin-left: -0.5rem">
        <a href="/" class="router-link-active">DiscordBio</a>
      </div>
      <div class="text center">
        <router-link to="/"
          >Home
          <v-icon
            style="
              font-size: 100px !important;
              margin-left: 0.3rem;
              fill: white;
              margin-top: 0.1rem;
            "
            name="angle-down"
          />
        </router-link>
        <router-link to="/search"
          >Search
          <v-icon
            style="
              font-size: 100px !important;
              margin-left: 0.3rem;
              fill: white;
              margin-top: 0.1rem;
            "
            name="angle-down"
        /></router-link>
        <router-link to="/discord"
          >Discord
          <v-icon
            style="
              font-size: 100px !important;
              margin-left: 0.3rem;
              fill: white;
              margin-top: 0.1rem;
            "
            name="angle-down"
        /></router-link>
        <router-link to="/team"
          >Team
          <v-icon
            style="
              font-size: 100px !important;
              margin-left: 0.3rem;
              fill: white;
              margin-top: 0.1rem;
            "
            name="angle-down"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
}
.text {
  display: flex;
}
.center,
.center > router-link {
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav {
  display: flex;
  justify-content: center;
  border-bottom: solid 1px white;
}
.logo img {
  max-width: 30px;
  max-height: 30px;
  margin-right: 0.5rem;
}
.logo-text a {
  margin-top: -1rem;
}
#nav {
  padding: 2rem;
}
#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}
#nav a.router-link-exact-active {
  color: #97dffc;
}
</style>