<template>
  <v-form>
    <v-text-field
      label="Username"
      required
    >
    </v-text-field>
    <v-text-field
      label="Password"
      required
    >
    </v-text-field>
    <v-btn @click="login('etmula', 'password')">Login</v-btn>
    <v-btn @click="logout()">Logout</v-btn>
    <v-btn @click="test()">Test</v-btn>
    <v-btn @click="getCookie()">Get Cookie</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import AccountService from '@/services/account-service'

export default Vue.extend({
  name: 'Login',

  components: {
  },

  methods: {
    login (username: string, password: string) {
      AccountService.login(username, password)
    },
    logout () {
      AccountService.logout()
    },
    test () {
      AccountService.test(this.$cookies.get('csrftoken'))
    },
    getCookie () {
      AccountService.getCookie()
    }
  }
})
</script>
