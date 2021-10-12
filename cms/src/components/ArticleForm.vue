<template>
    <div>
      <v-textarea
        name="search"
        label="search"
        v-model="searchText"
      >
      </v-textarea>
      <v-data-table
        :headers="headers"
        :items="articleModels"
        :search="searchText"
        :items-per-page="-1"
        item-key="name"
        dense
        hide-default-footer
        @click:row="onArticleRowClick"
      >
      </v-data-table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticleForm',

  props: ['articleModels'],

  data: () => ({
    headers: [{ text: 'name', value: 'name' }],
    searchText: ''
  }),

  methods: {
    onArticleRowClick (row) {
      if (this.$route.params.name !== row.name) {
        this.$router.push({ name: 'Article', params: { name: row.name } })
      }
    }
  }
})
</script>
