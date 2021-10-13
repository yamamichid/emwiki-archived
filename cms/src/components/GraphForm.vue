<template>
  <div>
    <v-autocomplete
      :items="articleModels"
      item-text="name"
      label="Select Article"
      v-model="articleModel"
    ></v-autocomplete>
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
    <v-btn block>Reset</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleModel from '@/models/article-model'

export default Vue.extend({
  name: 'GraphForm',

  props: ['articleModels', 'graphArticleModel', 'graphUpperLevel', 'graphLowerLevel'],

  data: () => ({
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
  }
})
</script>
