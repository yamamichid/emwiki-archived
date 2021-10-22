<template>
  <div>
    <v-container v-if="!accountModel">
      <v-row>
        <v-col cols="12">
          <v-btn block :to="{ name: 'Login' }">Login</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn block :to="{ name: 'Signup' }">Sighup</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-card v-if="accountModel">
      <v-card-title>
        {{ accountModel.username }}
      </v-card-title>
      <v-card-text>
        <p>{{ accountModel.email }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn>
          Logout
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AccountForm',

  props: ['accountModel'],

  data: () => ({
  })
})
</script>
