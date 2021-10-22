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
          size="36"
          @click="subDrawer = 'account'"
        ><v-icon>mdi-account</v-icon></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar class="d-block mx-auto" size="36"><v-btn icon @click="subDrawer = 'home'"><v-icon>mdi-home</v-icon></v-btn></v-avatar>
        <v-avatar class="d-block mx-auto" size="36"><v-btn icon @click="subDrawer = 'search'"><v-icon>mdi-magnify</v-icon></v-btn></v-avatar>
        <v-avatar class="d-block mx-auto" size="36"><v-btn icon @click="subDrawer = 'graph'"><v-icon>mdi-graph-outline</v-icon></v-btn></v-avatar>
      </v-navigation-drawer>
      <!-- subDrawer -->
      <keep-alive>
        <div class="pl-14">
          <!-- Account -->
          <div v-if="subDrawer == 'account'">
            <account-form
              :accountModel="accountModel"
            ></account-form>
          </div>
          <!-- Search -->
          <div v-if="subDrawer == 'search'">
            <v-select
              :items="searchForms"
              label="Target"
              v-model="currentSearchForm"
            >
            </v-select>
            <component
              v-bind:is="currentSearchForm"
              :articleModels="articleModels"
              :symbolModels="symbolModels"
            ></component>
          </div>
          <!-- Graph -->
          <div v-if="subDrawer == 'graph'">
            <graph-form
              :articleModels="articleModels"
              :grpahArticleName="null"
              :graphUpperLevel="graphUpperLevel"
              :graphLowerLevel="graphLowerLevel"
              @overall-clicked="openGraphOverall"
              @article-model-changed="changeGraphArticleModel"
              @upper-level-changed="changeGraphUpperLevel"
              @lower-level-changed="changeGraphLowerLevel"
            ></graph-form>
          </div>
        </div>
      </keep-alive>
    </v-navigation-drawer>

    <v-main style="resize: horizontal">
       <router-view
        :graphArticleModel="graphArticleModel"
        :graphUpperLevel="graphUpperLevel"
        :graphLowerLevel="graphLowerLevel"
        @article-model-changed="changeGraphArticleModel"
        @account-model-changed="changeAccountModel"
       ></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AccountForm from '@/components/AccountForm.vue'
import ArticleForm from '@/components/ArticleForm.vue'
import SymbolForm from '@/components/SymbolForm.vue'
import GraphForm from '@/components/GraphForm.vue'
import ArticleService from '@/services/article-service'
import SymbolService from '@/services/symbol-service'
import ArticleModel from '@/models/article-model'
import VueCookies from 'vue-cookies'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(VueCookies)

export default Vue.extend({
  name: 'App',

  components: {
    AccountForm,
    ArticleForm,
    SymbolForm,
    GraphForm
  },

  data: () => ({
    drawer: null,
    navWidth: 300,
    subDrawer: 'search',
    searchForms: [{ text: 'Article', value: 'ArticleForm' }, { text: 'Symbol', value: 'SymbolForm' }, { text: 'Theorem/Definition', value: 'TheoremForm' }],
    currentSearchForm: 'ArticleForm',
    menus: [
      { title: 'Index', icon: 'mdi-web', url: '/' },
      { title: 'Home', icon: 'mdi-home', url: '/home' },
      { title: 'Favorites', icon: 'mdi-heart', url: '/favorites' },
      { title: 'About', icon: 'mdi-information-variant', url: '/about' }
    ],
    articleModels: [],
    symbolModels: [],
    search: null,
    graphArticleModel: { name: null } as ArticleModel,
    graphUpperLevel: 0,
    graphLowerLevel: 0,
    accountModel: null
  }),
  computed: {
    filterdArticles () {
      return this.articles.filter(article => article.name.includes(this.search))
    }
  },
  mounted () {
    ArticleService.getAll().then((articleModels) => {
      this.articleModels = articleModels
    })
    SymbolService.getAll().then((symbolModels) => {
      this.symbolModels = symbolModels
    })
  },
  methods: {
    openGraphOverall () {
      this.graphArticleModel = null
      if (this.$route.name !== 'Graph') {
        this.$router.push({ name: 'Graph' })
      }
    },
    changeGraphArticleModel (newVal) {
      this.graphArticleModel = newVal
      if (this.$route.name !== 'Graph') {
        this.$router.push({ name: 'Graph' })
      }
    },
    changeGraphUpperLevel (newVal) {
      this.graphUpperLevel = newVal
    },
    changeGraphLowerLevel (newVal) {
      this.graphLowerLevel = newVal
    },
    changeAccountModel (newVal) {
      this.accountModel = newVal
    }
  },
  watch: {
    subDrawer (newVal, oldVal) {
      if (newVal === 'home') {
        this.navWidth = 56
        this.$router.push({ name: 'Home' })
      } else {
        this.navWidth = 300
      }
    },
    currentSearchForm (newVal, oldVal) {
      if (newVal === 'TheoremForm') {
        this.navWidth = 800
      } else {
        this.navWidth = 300
      }
    }
  }
})
</script>
