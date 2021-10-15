<template>
  <div>
    <v-btn block>Reset</v-btn>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="upperLevel"
            type="number"
            label="Upper level"
            min="0"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="lowerLevel"
            type="number"
            label="Lower level"
            min="0"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-text-field
      label="Search"
      v-model="searchText"
    ></v-text-field>
    <v-data-table
        :headers="headers"
        :items="articleModels"
        :search="searchText"
        :items-per-page="-1"
        item-key="name"
        dense
        hide-default-footer
        @click:row="onGraphRowClick"
      >
      </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleModel from '@/models/article-model'

export default Vue.extend({
  name: 'GraphForm',

  props: ['articleModels', 'graphArticleModel', 'graphUpperLevel', 'graphLowerLevel'],

  data: () => ({
    headers: [{ text: 'name', value: 'name' }],
    searchText: ''
  }),

  computed: {
    articleModel: {
      get () {
        return this.graphArticleModel
      },
      set (newVal, arg) {
        this.$emit('article-model-changed', this.articleModels.find((articleModel) => articleModel.name === newVal))
      }
    },
    upperLevel: {
      get () {
        return this.graphUpperLevel
      },
      set (newVal) {
        this.$emit('upper-level-changed', newVal)
      }
    },
    lowerLevel: {
      get () {
        return this.graphLowerLevel
      },
      set (newVal) {
        this.$emit('lower-level-changed', newVal)
      }
    }
  },
  methods: {
    onGraphRowClick (row) {
      this.articleModel = row.name
    }
  }
})
</script>
