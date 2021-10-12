<template>
    <div id="symbol" v-html="symbolHtml"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import SymbolModel from '@/models/symbol-model'
import SymbolService from '@/services/symbol-service'

export default Vue.extend({
  name: 'Symbol',
  data: () => ({
    symbolHtml: '',
    symbolModel: null
  }),
  watch: {
    $route (newVal, oldVal) {
      SymbolService.get(newVal.params.name).then((symbolModel) => {
        this.symbolModel = symbolModel
      })
    },
    symbolModel (newsymbolModel, oldsymbolModel) {
      this.setSymbolHtml(newsymbolModel.filename)
    }
  },
  mounted () {
    SymbolService.get(this.$route.params.name).then((symbolModel) => {
      this.symbolModel = symbolModel
    })
  },
  methods: {
    setSymbolHtml (filename: string) {
      SymbolService.getHtml(filename).then((symbolHtml) => {
        this.symbolHtml = symbolHtml as string
      })
    }
  }
})
</script>
