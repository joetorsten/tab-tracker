<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-app-bar fixed dense dark class="indigo">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link to="/" activeClass="active" tag="btn">
        <v-toolbar-title route to="Home" class="toolbar-title button">Tab-Tracker</v-toolbar-title>
      </router-link>
      <v-btn
        route to="/songs" 
        elevation="0" 
        color="indigo" 
        class="button">
        Browse
      </v-btn>

      <v-spacer></v-spacer>
      <!-- <router-link to="register" activeClass="active" tag="btn"> -->
        <v-btn
        v-if="!$store.state.isUserLoggedIn"
        route to="/register" elevation="0" color="indigo" class="button">
        Sign Up
      </v-btn>
       <v-btn
        v-if="$store.state.isUserLoggedIn"
        route to="Home" 
        elevation="0" 
        color="indigo" 
        class="button"
        @click="logout">
        Log Out
      </v-btn>
      <!-- </router-link> -->
      <!-- <router-link to="login" activeClass="active" tag="btn"> -->
        <v-btn
        v-if="!$store.state.isUserLoggedIn"
        route to="/login" elevation="0" color="indigo" class="button">
        Log In
      </v-btn>
      <!-- </router-link> -->


      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  methods: {
    logout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$store.dispatch('logOut')
        

    }
  }
}
</script>

<style scoped>
.toolbar-title:hover {
  cursor: pointer;
}

.button:active {
  transform: translateY(2px)
}

</style>