<template>
    <iframe id='symbol' width="100%" height="100%" :src="symbolHtmlUrl" @load="iframeChanged"></iframe>
</template>

<script lang="ts">
import Vue from 'vue'
import SymbolModel from '@/models/symbol-model'
import SymbolService from '@/services/symbol-service'

export default Vue.extend({
  name: 'Symbol',
  data: () => ({
    symbolModel: null,
    symbolHtmlUrl: null
  }),
  watch: {
    $route (newVal, oldVal) {
      this.reload()
    }
  },
  methods: {
    reload () {
      SymbolService.get(this.$route.params.name).then((symbolModel) => {
        this.symbolModel = symbolModel
        this.symbolHtmlUrl = SymbolService.getHtmlUrl(this.symbolModel.filename)
      })
    },
    iframeChanged () {
      try {
        const symbolName: string = document.getElementById('symbol').contentWindow.location.href.split('/').at(-1).split('.').at(0)
        this.$router.push({ name: 'Symbol', params: { name: symbolName } })
      } catch (e) {
        console.log('URL will be changed in product.')
      }
    }
  },
  mounted () {
    this.reload()
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
