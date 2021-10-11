<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      flat
      height="72"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      :width='navWidth'
      style="resize: horizontal"
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        color="grey lighten-3"
        mini-variant
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="grey darken-1"
          size="36"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar class="d-block mx-auto" size="36"><v-btn icon @click="subDrawer = 'home'"><v-icon>mdi-home</v-icon></v-btn></v-avatar>
        <v-avatar class="d-block mx-auto" size="36"><v-btn icon @click="subDrawer = 'search'"><v-icon>mdi-magnify</v-icon></v-btn></v-avatar>
        <v-avatar class="d-block mx-auto" size="36"><v-btn icon @click="subDrawer = 'graph'"><v-icon>mdi-graph-outline</v-icon></v-btn></v-avatar>
      </v-navigation-drawer>
      <!-- Search -->
      <div v-if="subDrawer != 'delete'" style="resize: horizontal">
        <div class="pl-14" v-if="subDrawer == 'search'">
          <v-textarea
            name="search"
            label="search"
            v-model="search"
          >
          </v-textarea>
          <v-radio-group row v-model="searchCategory">
            <v-radio
              label="Article"
              value="article"
            ></v-radio>
            <v-radio
              label="Symbol"
              value="symbol"
            ></v-radio>
            <v-radio
              label="Theorem"
              value="theorem"
            ></v-radio>
          </v-radio-group>
          <v-data-table
            :headers="headers"
            :items="articles"
            :search="search"
            :items-per-page="-1"
            item-key="name"
            dense
            hide-default-footer
            @click:row="onArticleRowClick"
          >
          </v-data-table>
        </div>
      <!-- Graph -->
        <div class="pl-14" v-if="subDrawer == 'graph'">
          <v-autocomplete
            :items="articles"
            item-value="name"
            item-text="name"
            label="article"
            solo
            auto-select-first
          ></v-autocomplete>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="graphUpperLevel"
                  type="number"
                  label="Upper level"
                  min="0"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="graphLowerLevel"
                  type="number"
                  label="Lower level"
                  min="0"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-btn block>Reset</v-btn>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main style="resize: horizontal">
       <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleService from '@/services/article-service'
import ArticleModel from '@/models/article-model'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: null,
    navWidth: 300,
    subDrawer: 'search',
    searchCategory: 'article',
    menus: [
      { title: 'Index', icon: 'mdi-web', url: '/' },
      { title: 'Home', icon: 'mdi-home', url: '/home' },
      { title: 'Favorites', icon: 'mdi-heart', url: '/favorites' },
      { title: 'About', icon: 'mdi-information-variant', url: '/about' }
    ],
    headers: [{ text: 'name', value: 'name' }],
    articles: [],
    search: null,
    graphUpperLevel: 0,
    graphLowerLevel: 0
  }),
  computed: {
    filterdArticles () {
      return this.articles.filter(article => article.name.includes(this.search))
    }
  },
  mounted () {
    ArticleService.get().then((response) => {
      this.articles = response.data as Array
    })
  },
  methods: {
    onHomeClick () {
      this.navWidth = 0
      this.$router.push({ name: 'Home' })
    },
    onArticleRowClick (row) {
      this.$router.push({ name: 'Article', params: { name: row.name } })
    }
  },
  watch: {
    searchCategory (newVal, oldVal) {
      if (newVal === 'theorem') {
        this.navWidth = 800
      } else {
        this.navWidth = 300
      }
    },
    subDrawer (newVal, oldVal) {
      if (newVal === 'home') {
        this.navWidth = 56
        this.$router.push({ name: 'Home' })
      } else {
        this.navWidth = 300
      }
    }
  }
})
</script>
