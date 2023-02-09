import { BeerListStructure } from "../data/types";
import {
  BeerListAction,
  BeerListActionType,
} from "../store/actions/beerList/types";

export const beerList: BeerListStructure = [];
export const dispatch = jest.fn();

export interface MockContextStructure {
  dispatch: React.Dispatch<BeerListAction>;
  beerList: BeerListStructure;
}

export const mockContext: MockContextStructure = {
  dispatch,
  beerList: [] as BeerListStructure,
};

export const mockLoadBeerListAction = {
  type: BeerListActionType.loadBeerList,
  payload: beerList,
};
export const mockDispatch = jest.spyOn(mockContext, "dispatch");
