<template>
  <v-form>
    <v-text-field
      label="Username"
      required
    >
    </v-text-field>
    <v-text-field
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      required
    ></v-text-field>
    <v-text-field
      label="Password confirmation"
      required
    >
    </v-text-field>
    <v-btn @click="login('etmula', 'password')">Signup</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Signup',

  components: {
  },

  methods: {
    signup (username: string, email: string, password: string, passwordConfirmation: string) {
      console.log('signup')
    }
  }
})
</script>
