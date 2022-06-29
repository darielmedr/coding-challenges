import { NodeId } from "./node.model";

export interface NodeConnection extends NodeId {
  prev: string;
  next: string;
}
