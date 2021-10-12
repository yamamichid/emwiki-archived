<template>
  <div>
    <div id='graph'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import GraphService from '@/services/graph-service'
import cytoscape from 'cytoscape'

export default Vue.extend({
  name: 'Graph',

  data: () => ({
    graphModel: null
  }),

  watch: {
    graphArticleModel (newVal, oldVal) {
      console.log('grpahArticleModel changed')
      GraphService.getModel().then((graphModel) => {
        this.createGraph(graphModel).then((cy) => {
          window.cy = cy
        })
      })
    },
    $route (newVal, oldVal) {
      console.log('grpahArticleModel changed')
      GraphService.getModel().then((graphModel) => {
        this.createGraph(graphModel).then((cy) => {
          window.cy = cy
        })
      })
    }
  },

  async mounted () {
    GraphService.getModel().then((graphModel) => {
      this.createGraph(graphModel).then((cy) => {
        window.cy = cy
      })
    })
  },

  methods: {
    createGraph (graphModel): Promise<any> {
      return new Promise((resolve) => {
        const cy = cytoscape({
          container: document.getElementById('graph'),
          elements: [],
          boxSelectionEnabled: true,
          autounselectify: false,
          selectionType: 'additive',
          wheelSensitivity: 0.1
        })
        console.log()
        const nodes = graphModel.elements.nodes
        const edges = graphModel.elements.edges
        const nodesAndEdges = []

        for (const i in nodes) {
          for (const j in nodes[i]) {
            const node = {}
            node.group = 'nodes'
            node.data = { id: nodes[i][j].id, name: nodes[i][j].name, href: nodes[i][j].href }
            node.position = { x: (nodes[i][j].x + 1) * 300, y: (nodes[i][j].y + 1) * 300 }
            nodesAndEdges.push(node)
          }
        }
        for (const i in edges) {
          for (const j in edges[i]) {
            const edge = {}
            edge.group = 'edges'
            edge.data = { source: edges[i][j].source, target: edges[i][j].target }
            nodesAndEdges.push(edge)
          }
        }
        console.log('add')
        cy.add(nodesAndEdges)
        console.log('style')
        cy.style(GraphService.getCytoscapeStyle())
        console.log('fit')
        cy.fit(cy.nodes().orphans())
        console.log('resolve')
        resolve(cy)
      })
    }
  }
})
</script>

<style>
#graph{
    position: absolute;
    height: 80%;
    width: 100%;
}
</style>
