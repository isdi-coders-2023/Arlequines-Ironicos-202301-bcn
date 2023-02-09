import { BeerListStructure } from "../../../data/types";

export enum BeerListActionType {
  loadBeerList,
}

export interface BeerListAction {
  type: BeerListActionType;
  payload?: unknown;
}

export interface LoadBeerListAction extends BeerListAction {
  payload: BeerListStructure;
}
