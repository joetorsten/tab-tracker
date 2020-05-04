<template>
  <app-panel title="Login">
  <div slot="text">
  <v-form autocomplete="off">
    <span class="group pa-2">
      <v-icon class="icon">mdi-account</v-icon>
      <v-text-field
        label="email"
        name="login"
        type="email"
        v-model="email"
      />
    </span>
    <span class="group pa-2">
      <v-icon class="icon">mdi-lock</v-icon>
      <v-text-field
        id="password"
        label="Password"
        name="password"
        type="password"
        v-model="password"
      />
    </span>
  </v-form>
    <div class="error" v-html="error"></div>
  </div>
  <div slot="actions">
 <v-btn dark 
  @click="login" 
  color="indigo">Sign in</v-btn>
  </div>
  </app-panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel.vue'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null

    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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

<style>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

.error {
  color: white
}

</style>
