<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="indigo" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
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
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn dark @click="register" color="indigo">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null

    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
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
