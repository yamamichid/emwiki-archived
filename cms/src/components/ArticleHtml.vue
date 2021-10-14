<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticleHtml',

  props: ['html'],
  data: () => ({
  }),
  computed: {
    template () {
      return Vue.compile(this.html).render
    }
  },
  render () {
    return this.template()
  }
})
</script>
