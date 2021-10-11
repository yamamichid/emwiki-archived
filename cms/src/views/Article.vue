<template>
    <div id="article" loading v-html="articleHtml">{{this.articleName}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleService from '@/services/article-service'

export default Vue.extend({
  name: 'Article',
  data: () => ({
    articleHtml: ''
  }),
  computed: {
    articleName () {
      return this.$route.params.name
    }
  },
  watch: {
    articleName (newVal, oldVal) {
      if (newVal) {
        this.setArticleHtml(newVal)
      }
    }
  },
  mounted () {
    this.setArticleHtml(this.$route.params.name)
  },
  methods: {
    setArticleHtml (name: string) {
      ArticleService.getHtml(name).then((response) => {
        this.articleHtml = response.data as string
      })
    }
  }
})
</script>
