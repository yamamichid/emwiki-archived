<template>
    <div id="article" v-html="articleHtml"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleModel from '@/models/article-model'
import ArticleService from '@/services/article-service'

export default Vue.extend({
  name: 'Article',
  data: () => ({
    articleHtml: '',
    articleModel: null
  }),
  watch: {
    $route (newVal, oldVal) {
      this.articleModel = { name: this.$route.params.name } as ArticleModel
    },
    articleModel (newArticleModel, oldArticleModel) {
      this.setArticleHtml(newArticleModel.name)
    }
  },
  mounted () {
    this.articleModel = { name: this.$route.params.name } as ArticleModel
  },
  methods: {
    setArticleHtml (name: string) {
      ArticleService.getHtml(name).then((articleHtml) => {
        this.articleHtml = articleHtml as string
      })
    }
  }
})
</script>
