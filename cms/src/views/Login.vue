<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="login(username, password)"
  >
    <v-text-field
      v-model="username"
      label="Username"
      :rules="[v => !!v || 'Username is required']"
    >
    </v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      :rules="[v => !!v || 'Password is required']"
    >
    </v-text-field>
    <v-btn type="submit">Login</v-btn>
    <v-btn @click="logout()">Logout</v-btn>
    <v-btn @click="test()">Test</v-btn>
    <v-btn @click="getCookie()">Get Cookie</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import AccountService from '@/services/account-service'
import AccountModel from '@/models/account-model'

export default Vue.extend({
  name: 'Login',

  components: {
  },

  data: () => ({
    valid: true,
    username: '',
    password: ''
  }),

  methods: {
    login (username: string, password: string) {
      if (this.$refs.form.validate()) {
        const accountModel: AccountModel = AccountService.login(username, password)
        this.$emit('login', accountModel)
      }
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
