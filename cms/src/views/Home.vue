<template>
  <div>
    <v-card>
      <v-card-title>emwiki</v-card-title>
      <v-card-text>This Web application can write a TeX-format description in the Mizar Mathmatical Library (MML), and make the description follow the MML update. This Web application provides users with the function of adding, editing, and browsing description of MML on a Wiki format Web platform. If there is an update to the MML, link the description to the new MML by running the program on the server.</v-card-text>
    </v-card>
    <v-card elecation="2">
      <v-card-title>Search</v-card-title>
      <v-card-actions>
        <v-btn>Article</v-btn>
        <v-btn>Symbol</v-btn>
        <v-btn>Theorem/Definition</v-btn>
      </v-card-actions>
    </v-card>
    <v-card elecation="2">
      <v-card-title>Graph</v-card-title>
      <v-card-actions>
        <v-btn>Article</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  components: {
  }
})
</script>
