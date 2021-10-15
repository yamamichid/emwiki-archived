import GraphModel from '@/models/graph-model'
import axios from 'axios'

export default class GraphService {
  static async getModel (): Promise<any> {
    return axios.get('/static/graph/graph_attrs/dot_graph.json').then((response) => {
      return response.data
    })
  }

  static getCytoscapeStyle (): Record<string, any>[] {
    return [
      // Initial style
      {
        selector: 'node',
        css: {
          'background-color': '#ff0000', shape: 'ellipse', width: 300, height: 300, content: 'data(name)', 'font-size': 120, opacity: 1, 'z-index': 1, 'text-halign': 'center', 'text-valign': 'center', 'font-style': 'normal', 'font-weight': 'bold', color: '#ffffff', 'text-outline-color': 'red', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'edge',
        css: {
          'line-color': 'black', 'target-arrow-shape': 'triangle', 'curve-style': 'straight', 'target-arrow-color': 'black', 'arrow-scale': 3, width: 5, opacity: 0.3, 'z-index': 1
        }
      },
      // Style of highlight nodes
      {
        selector: 'node.highlight',
        css: {
          'font-size': 100, width: 400, height: 400, content: 'data(name)', opacity: 1, 'z-index': 10
        }
      },
      {
        selector: 'node.selected',
        css: {
          'background-color': '#fff100', color: '#ff0000', width: 600, height: 600, 'text-outline-color': '#fff100', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      // Style of ancestor nodes
      {
        selector: 'node.ancestor0',
        css: {
          'background-color': '#fcc800', color: '#ffffff', 'text-outline-color': '#fcc800', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor1',
        css: {
          'background-color': '#f39800', color: '#ffffff', 'text-outline-color': '#f39800', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor2',
        css: {
          'background-color': '#eb6100', color: '#ffffff', 'text-outline-color': '#eb6100', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor3',
        css: {
          'background-color': '#e60012', color: '#ffffff', 'text-outline-color': '#e60012', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor4',
        css: {
          'background-color': '#ff4477', color: '#ffffff', 'text-outline-color': '#ff4477', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor5',
        css: {
          'background-color': '#ff6699', color: '#ffffff', 'text-outline-color': '#ff6699', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor6',
        css: {
          'background-color': '#cc4499', color: '#ffffff', 'text-outline-color': '#cc4499', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor7',
        css: {
          'background-color': '#be0081', color: '#ffffff', 'text-outline-color': '#be0081', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor8',
        css: {
          'background-color': '#920783', color: '#ffffff', 'text-outline-color': '#920783', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.ancestor9',
        css: {
          'background-color': '#601986', color: '#ffffff', 'text-outline-color': '#601986', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      // Style of descendant nodes
      {
        selector: 'node.descendant0',
        css: {
          'background-color': '#cfdb00', color: '#ffffff', 'text-outline-color': '#cfdb00', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant1',
        css: {
          'background-color': '#8fc31f', color: '#ffffff', 'text-outline-color': '#8fc31f', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant2',
        css: {
          'background-color': '#22ac38', color: '#ffffff', 'text-outline-color': '#22ac38', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant3',
        css: {
          'background-color': '#009944', color: '#ffffff', 'text-outline-color': '#009944', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant4',
        css: {
          'background-color': '#009b6b', color: '#ffffff', 'text-outline-color': '#009b6b', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant5',
        css: {
          'background-color': '#009e96', color: '#ffffff', 'text-outline-color': '#009e96', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant6',
        css: {
          'background-color': '#00a0c1', color: '#ffffff', 'text-outline-color': '#00a0c1', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant7',
        css: {
          'background-color': '#00a0e9', color: '#ffffff', 'text-outline-color': '#00a0e9', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant8',
        css: {
          'background-color': '#0086d1', color: '#ffffff', 'text-outline-color': '#0086d1', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      {
        selector: 'node.descendant9',
        css: {
          'background-color': '#0068b7', color: '#ffffff', 'text-outline-color': '#0068b7', 'text-outline-opacity': 1, 'text-outline-width': 10
        }
      },
      // Style of highlight edges
      {
        selector: 'edge.highlight',
        css: {
          'line-color': '#006400', 'curve-style': 'straight', 'target-arrow-color': '#006400', 'arrow-scale': 5, width: 10, opacity: 1, 'z-index': 20
        }
      },
      // Style of not highlight nodes
      {
        selector: 'node.faded',
        css: { 'background-color': '#808080' }
      },
      // Style of not highlight nodes and edges
      {
        selector: '.faded',
        css: { opacity: 0.4, 'z-index': 0 }
      }
    ]
  }
}
