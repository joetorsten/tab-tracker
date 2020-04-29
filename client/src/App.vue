<template>
  <v-app>
    <appHeader></appHeader>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: "App",

  components: {
    appHeader: Header
  },

  data: () => ({
    //
  })
};
</script>
