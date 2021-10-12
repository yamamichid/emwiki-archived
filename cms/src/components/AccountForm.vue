<template>
  <div>
    <v-btn block :to="{ name: 'Login' }">Login</v-btn>
    <v-btn block :to="{ name: 'Signup' }">Sighup</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AccountForm',

  data: () => ({
  })
})
</script>
