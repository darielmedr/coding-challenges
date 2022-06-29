import { Node } from "./node.model";
import { NodeConnection } from "./node-connection.model";
import { Data } from "./data.model";
import { getDataById, getNextNodes, getRootNodes, sortNodes } from "./index";

describe("sortNodes", () => {
  test("should return Node values sorted by levels", () => {
    const nodes: Node[] = [
      { id: "3", action: "put", description: "put" },
      { id: "1", action: "get", description: "get" },
      { id: "2", action: "post", description: "post" },
    ];

    const connections: NodeConnection[] = [
      { id: "1", prev: "", next: "2" },
      { id: "2", prev: "1", next: "3" },
      { id: "3", prev: "2", next: "" },
    ];

    const expectedValue: Node[] = [
      { id: "1", action: "get", description: "get" },
      { id: "2", action: "post", description: "post" },
      { id: "3", action: "put", description: "put" },
    ];

    const result: Node[] = sortNodes(nodes, connections);
    console.log(result)

    expect(result).toEqual(expectedValue);
  });
});

describe("getDataById", () => {
  test("should return Node values with 'id' as keys", () => {
    const nodes: Node[] = [
      { id: "1", action: "get", description: "get" },
      { id: "2", action: "post", description: "post" },
      { id: "3", action: "put", description: "put" },
    ];

    const expectedValue: Data<Node> = {
      "1": { action: "get", description: "get" },
      "2": { action: "post", description: "post" },
      "3": { action: "put", description: "put" },
    };

    const nodesById: Data<Node> = getDataById<Node>(nodes);

    expect(nodesById).toEqual(expectedValue);
  });

  test("should return NodeConnection values with 'id' as keys", () => {
    const connections: NodeConnection[] = [
      { id: "1", prev: "", next: "2" },
      { id: "2", prev: "1", next: "3" },
      { id: "3", prev: "2", next: "" },
    ];

    const expectedValue: Data<NodeConnection> = {
      "1": { prev: "", next: "2" },
      "2": { prev: "1", next: "3" },
      "3": { prev: "2", next: "" },
    };

    const connectionsById: Data<NodeConnection> =
      getDataById<NodeConnection>(connections);

    expect(connectionsById).toEqual(expectedValue);
  });
});

describe("getStartingNodes", () => {
  test("should return Node values that doesn't have a 'prev' node with 'id' as keys", () => {
    const nodesById: Data<Node> = {
      "1": { action: "get", description: "get" },
      "2": { action: "post", description: "post" },
      "3": { action: "put", description: "put" },
    };

    const connections: NodeConnection[] = [
      { id: "1", prev: "", next: "2" },
      { id: "2", prev: "1", next: "3" },
      { id: "3", prev: "2", next: "" },
    ];

    const expectedValue: Node[] = [
      { id: "1", action: "get", description: "get" },
    ];

    const result: Node[] = getRootNodes(nodesById, connections);

    expect(result).toEqual(expectedValue);
  });
});

describe("getNextNodes", () => {
  test("should return all Node values by 'prev' property", () => {
    const nodes: Node[] = [
        { id: "1", action: "get", description: "get" }
    ];

    const nodesById: Data<Node> = {
      "1": { action: "get", description: "get" },
      "2": { action: "post", description: "post" },
      "3": { action: "put", description: "put" },
    };

    const childNodesById: Record<string, string[]> = {
      "1": ["2"],
      "2": ["3"],
      "3": [],
    };

    const expectedValue: Node[] = [
        { id: "2", action: "post", description: "post" },
    ];

    const result: Node[] = getNextNodes(nodes, nodesById, childNodesById);

    expect(result).toEqual(expectedValue);
  });

  test("should return empty array", () => {
    const nodes: Node[] = [
        { id: "3", action: "put", description: "put" }
    ];

    const nodesById: Data<Node> = {
      "1": { action: "get", description: "get" },
      "2": { action: "post", description: "post" },
      "3": { action: "put", description: "put" },
    };

    const childNodesById: Record<string, string[]> = {
      "1": ["2"],
      "2": ["3"],
      "3": [],
    };

    const expectedValue: Node[] = [];
    const expectedLength: number = 0;

    const result: Node[] = getNextNodes(nodes, nodesById, childNodesById);

    expect(result).toEqual(expectedValue);
    expect(result.length).toBe(expectedLength);
  });
});
