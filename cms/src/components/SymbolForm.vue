<template>
    <div>
      <v-textarea
        name="search"
        label="search"
        v-model="symbolSearchText"
      >
      </v-textarea>
      <v-data-table
        :headers="headers"
        :items="symbolModels"
        :search="symbolSearchText"
        :items-per-page="-1"
        item-key="name"
        dense
        hide-default-footer
        @click:row="onSymbolRowClick"
      >
      </v-data-table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SymbolForm',

  props: ['symbolModels'],

  data: () => ({
    headers: [{ text: 'name', value: 'name' }],
    symbolSearchText: ''
  }),

  methods: {
    onSymbolRowClick (row) {
      this.$router.push({ name: 'Symbol', params: { name: row.name } })
    }
  }
})
</script>
