import { NodeId } from "./node.model";

export type Data<T> = Record<string, Omit<T, keyof NodeId>>;
