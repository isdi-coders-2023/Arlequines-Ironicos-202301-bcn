import { BeerStructure } from "../../../data/types";

export enum BeerListActionType {
  defaultActionType,
  loadBeerList,
}

export interface BeerListAction {
  type: BeerListActionType;
  payload?: unknown;
}

export interface LoadBeerListAction extends BeerListAction {
  payload: BeerStructure[];
}
