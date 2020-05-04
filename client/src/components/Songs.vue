<template>
<appPanel title="Songs">
  <div
  slot="text">
  <v-btn color="indigo accent-2"
  fab
  absolute
  right
  middle
  route to="/songs/create">
<v-icon class="icon">mdi-plus</v-icon>
  </v-btn>
  <div
  v-for="song in songs"
  :key="song.id">
    <h4>{{song.title}}</h4>
    <br>
    {{song.artist}}
    <br>
    {{song.album}}
  </div>
  </div>  
</appPanel>
</template>

<script>
import Panel from '@/components/Panel.vue'
import SongsService from '@/services/SongsService'
export default {
  data() {
    return {
      songs: []
    }
  },
  components: {
    appPanel: Panel
  },
  async mounted() {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style>

</style>
