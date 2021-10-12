<template>
  <div>
    <v-autocomplete
      :items="articleModels"
      item-text="name"
      label="article"
      solo
      auto-select-first
      v-model="articleModelTest"
    ></v-autocomplete>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="upperLevelTest"
            type="number"
            label="Upper level"
            min="0"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="lowerLevelTest"
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
    articleModelTest: { name: '' } as ArticleModel,
    upperLevelTest: 0,
    lowerLevelTest: 0
  }),

  watch: {
    articleModelTest (newVal, oldVal) {
      this.$router.push({
        name: 'Graph',
        params: {
          name: newVal,
          upperLevel: this.upperLevelTest,
          lowerLevel: this.lowerLevelTest
        }
      })
    },
    upperLevelTest (newVal, oldVal) {
      this.$router.push({
        name: 'Graph',
        params: {
          name: this.articleModelTest.name,
          upperLevel: newVal,
          lowerLevel: this.lowerLevelTest
        }
      })
    }
  },

  computed: {
    articleModel: {
      get () {
        return this.graphArticleModel
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    },
    upperLevel: {
      get () {
        return this.graphUpperLevel
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    },
    lowerLevel: {
      get () {
        return this.graphLowerLevel
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
})
</script>
