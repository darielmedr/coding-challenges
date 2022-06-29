import { Data } from './data.model';
import { NodeConnection } from './node-connection.model';
import { Node, NodeId } from "./node.model";

export function sortNodes(nodes: Node[], connections: NodeConnection[]): Node[] {
    const nodesById: Data<Node> = getDataById<Node>(nodes);
    const childNodesById: Record<string, string[]> = getChildNodesById(connections);

    const rootNodes: Node[] = getRootNodes(nodesById, connections);

    const nodesByLevel: Node[] = getAllNextNodes(rootNodes, nodesById, childNodesById);

    return nodesByLevel;
}

export function getDataById<T extends NodeId>(values: T[]): Data<T> {
    const dataById: Data<T> = {};

    values.forEach(value => {
        const { id, ...keys } = value;
        dataById[id] = { ...keys };
    });

    return dataById;
}

export function getChildNodesById(connections: NodeConnection[]): Record<string, string[]> {
  const childNodesById: Record<string, string[]> = {};

  connections.forEach((connection) => {
    const { id, next } = connection;

    if (childNodesById[id]) {
      childNodesById[id].push(next);
    } else {
      childNodesById[id] = [next];
    }
  });

  return childNodesById;
}

export function getRootNodes(nodesById: Data<Node>, connections: NodeConnection[]): Node[] {
    return getStartEndNodesByField(nodesById, connections, 'prev');
}
export function getBottomNodes(nodesById: Data<Node>, connections: NodeConnection[]): Node[] {
    return getStartEndNodesByField(nodesById, connections, 'next');
}
function getStartEndNodesByField(nodesById: Data<Node>, connections: NodeConnection[], field: "prev" | "next"): Node[] {
  return connections
    .filter((connection) => !connection[field])
    .map(({ id }) => {
      const nodeData = nodesById[id];
      return { id, ...nodeData };
    });
}

function getAllNextNodes(rootNodes: Node[], nodesById: Data<Node>, childNodesById: Record<string, string[]>): Node[] {
    console.log(">>>>>>>>>>>>", rootNodes)
    let nodes: Node[] = [];

    const nextNodes = getNextNodes(rootNodes, nodesById, childNodesById);

    if (rootNodes.length === 0) return nodes;

    nodes = [...getAllNextNodes(nextNodes, nodesById, childNodesById)];
    console.log("------->>>>>", nodes)

    return nodes;
}

export function getNextNodes(rootNodes: Node[], nodesById: Data<Node>, childNodesById: Record<string, string[]>): Node[] {
    return rootNodes
      .map(({ id }) => childNodesById[id])
      .filter(nextNodes => nextNodes?.length > 0)
      .flatMap(nextNodes =>
        nextNodes.map(nextNodeId => {
        const nodeData = nodesById[nextNodeId];
        return { id: nextNodeId, ...nodeData };
      }));
  }
