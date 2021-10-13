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

<style>
@charset "UTF-8";

body {
    margin: 0;
}

#symbol {
    font-family: consolas;
}

#list-of-definition {
    overflow: auto;
    max-height: 90vh;
}

#symbol span[data-link] {
    color: #007bff;
    font-weight: bold;
}

#symbol span[data-link]:hover {
    cursor: pointer;
    color: #ffffff;
    background: #007bff;
}

span[data-href] {
    text-decoration: underline;
    color: #00796B;
    font-weight: bold;
}

span[data-href]:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #ffffff;
    background: #00796B;
}

:target{
    border: 3px solid #007bff !important;
}

.mml-element .source-box div.add {
    padding-left: 3mm;
    padding-bottom: 0mm;
    margin: 0 0 0 0;
}

.mml-element .source-box span.kw {
    font-weight: bold;
}

.mml-element .source-box .main-sentence {
    background: #fffbdd;
}

</style>
