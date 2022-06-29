export interface NodeId {
  id: string;
}

export interface Node extends NodeId {
  action: string;
  description: string;
}
