<template>
  <div>
    <v-autocomplete
      :items="articleModels"
      item-text="name"
      label="article"
      solo
      auto-select-first
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

  props: ['articleModels'],

  data: () => ({
    articleModel: { name: '' } as ArticleModel,
    upperLevel: 0,
    lowerLevel: 0
  }),

  watch: {
    articleModel (newVal, oldVal) {
      this.$router.push({
        name: 'Graph',
        params: {
          name: newVal,
          upperLevel: this.upperLevel,
          lowerLevel: this.lowerLevelTest
        }
      })
    },
    upperLevel (newVal, oldVal) {
      this.$router.push({
        name: 'Graph',
        params: {
          name: this.articleModel.name,
          upperLevel: newVal,
          lowerLevel: this.lowerLevel
        }
      })
    },
    lowerLevel (newVal, oldVal) {
      this.$router.push({
        name: 'Graph',
        params: {
          name: this.articleModel.name,
          upperLevel: this.upperLevel,
          lowerLevel: newVal
        }
      })
    }
  }
})
</script>
