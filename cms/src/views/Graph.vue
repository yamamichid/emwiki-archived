<template>
  <div>
    <div id='graph'></div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import GraphService from '@/services/graph-service'
import cytoscape from 'cytoscape'
let cy

export default Vue.extend({
  name: 'Graph',

  props: ['graphArticleModel', 'graphUpperLevel', 'grpahLowerLevel'],

  data: () => ({
    graphModel: null,
    selectors: [
      'highlight',
      'faded',
      'selected',
      'ancestor0',
      'ancestor1',
      'ancestor2',
      'ancestor3',
      'ancestor4',
      'ancestor5',
      'ancestor6',
      'ancestor7',
      'ancestor8',
      'ancestor9',
      'descendant0',
      'descendant1',
      'descendant2',
      'descendant3',
      'descendant4',
      'descendant5',
      'descendant6',
      'descendant7',
      'descendant8',
      'descendant9'
    ]
  }),

  watch: {
    graphArticleModel: {
      handler (newVal, oldVal) {
        console.log('Grpah graphArticleModelChanged')
        this.resetElements()
        if (this.graphArticleModel !== undefined) {
          this.highlightElements(this.graphArticleModel.name, this.graphUpperLevel, this.graphLowerLevel)
        }
      },
      deep: true
    },
    graphUpperLevel (newVal, oldVal) {
      this.resetElements()
      if (this.graphArticleModel !== undefined) {
        this.highlightElements(this.graphArticleModel.name, this.graphUpperLevel, this.graphLowerLevel)
      }
    },
    graphLowerLevel (newVal, oldVal) {
      this.resetElements()
      if (this.graphArticleModel !== undefined) {
        this.highlightElements(this.graphArticleModel.name, this.graphUpperLevel, this.graphLowerLevel)
      }
    }
  },

  async mounted () {
    GraphService.getModel().then((graphModel) => {
      this.graphModel = graphModel
      this.createGraph(graphModel).then((cyto) => {
        window.cy = cyto
        cy = cyto
        if (this.graphArticleModel.name !== null) {
          this.highlightElements(this.graphArticleModel.name, this.graphUpperLevel, this.graphLowerLevel)
        }
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
        cy.add(nodesAndEdges)
        cy.style(GraphService.getCytoscapeStyle())
        cy.fit(cy.nodes().orphans())
        resolve(cy)
      })
    },
    resetElements () {
      window.cy.elements().removeClass(this.selectors)
      window.cy.nodes().unlock()
    },
    highlightElements (articleName: string, upperLevel: number, lowerLevel: number) {
      const element = cy.nodes().filter((element) => {
        return element.data('name') === articleName.toUpperCase()
      })[0]
      element.addClass('highlight')
      element.addClass('selected')

      let currentElements = cy.collection().union(element)
      for (let i = 0; i < upperLevel; i++) {
        const connectedElements = []
        currentElements.find((element) => {
          element.outgoers().difference().find((element) => {
            element.addClass('highlight')
            element.addClass(`ancestor${Math.min(9, i)}`)
            connectedElements.push(element)
          })
        })
        currentElements = connectedElements
      }
      currentElements = cy.collection().union(element)
      for (let i = 0; i < upperLevel; i++) {
        const connectedElements = []
        currentElements.find((element) => {
          element.outgoers().difference().find((element) => {
            element.addClass('highlight')
            element.addClass(`descendant${Math.min(9, i)}`)
            connectedElements.push(element)
          })
        })
        currentElements = connectedElements
      }
      this.fadeElements(cy.elements().difference(cy.elements('.highlight')))
    },
    fadeElements (elements) {
      elements.addClass('faded')
      elements.lock()
    }
  }
})
</script>

<style>
#graph{
    position: absolute;
    height: 100%;
    width: 100%;
}

</style>
