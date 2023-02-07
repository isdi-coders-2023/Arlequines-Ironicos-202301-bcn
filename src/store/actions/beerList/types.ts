import { BeerStructure } from "../../../data/types";

export enum beerListActionType {
  loadBeerList,
}

export interface beerListAction {
  type: beerListActionType;
  payload: BeerStructure[];
}

export interface LoadBeerListAction extends beerListAction {
  payload: BeerStructure[];
}
