import { CamelCaseBeersStructure } from "../../../data/types";

export enum BeersActionType {
  loadBeers,
}

export interface BeersAction {
  type: BeersActionType;
  payload?: unknown;
}

export interface LoadBeersAction extends BeersAction {
  payload: CamelCaseBeersStructure;
}
