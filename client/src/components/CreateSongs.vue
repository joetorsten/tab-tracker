<template>
  <app-panel title="Create Your Song">
  <div slot="text">
        <div class="justify-center">
          <v-row no-gutters class="textfield" justify="center">
            <v-col md="4">
            <v-text-field
              label="Title"
              outlined
              v-model="song.title">
            </v-text-field>
              </v-col>
            <v-col md="4">
            <v-text-field
              label="Artist"
              outlined
              v-model="song.artist">
            </v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field
              label="Genre"
              outlined
              v-model="song.genre">
            </v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field
              label="Album"
              outlined
              v-model="song.album">
            </v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field
              label="albumImageURL"
              outlined
              v-model="song.albumImageURL">
            </v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field
              label="youtubeId"
              outlined
              v-model="song.youtubeId">
            </v-text-field>
            </v-col>
            <v-col md="8">
            <v-textarea
              label="lyrics"
              outlined
              v-model="song.lyrics">
            </v-textarea>
            </v-col>
            <v-col md="8">
            <v-textarea
              label="tab"
              outlined
              v-model="song.tab">
            </v-textarea>
            </v-col>
          </v-row>
        </div>
      </div>
  <div slot="actions">
  <v-btn dark 
  color="indigo"
  @click="create">Create Song</v-btn>
  </div>
  </app-panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel.vue'
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null        
  }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    } 
  },
  components: {
    appPanel: Panel
  }
  }
  
</script>

<style scoped>

.textfield {
  margin-top: 0;
  margin-bottom: 0;
}

</style>