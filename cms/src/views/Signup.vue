<template>
  <v-form
    v-model="validate"
    ref="form"
    @submit.prevent="signup(username, email, password, passwordConfirmation)"
  >
    <v-text-field
      label="Username"
      v-model="username"
      :rules="[v => !!v || 'Username is required']"
    >
    </v-text-field>
    <v-text-field
      label="Email"
      v-model="email"
      type="email"
      :rules="[v => !!v || 'Email is required']"
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      type="password"
      :rules="[v => !!v || 'Password is required']"
    ></v-text-field>
    <v-text-field
      label="Password confirmation"
      v-model="passwordConfirmation"
      type="password"
      :rules="[v => !!v || 'Password confirmation is required']"
    >
    </v-text-field>
    <v-btn type="submit">Signup</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import AccountService from '@/services/account-service'

export default Vue.extend({
  name: 'Signup',

  data: () => ({
    validate: true,
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }),

  methods: {
    signup (username: string, email: string, password: string, passwordConfirmation: string) {
      if (this.$refs.form.validate() && password === passwordConfirmation) {
        AccountService.signup(username, email, password)
      }
    }
  }
})
</script>
