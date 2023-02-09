import { BeerListStructure } from "../data/types";
import {
  BeerListAction,
  BeerListActionType,
} from "../store/actions/beerList/types";

export const beerList: BeerListStructure = [];
export const dispatch = jest.fn();

export interface mockContextStructure {
  dispatch: React.Dispatch<BeerListAction>;
  beerList: BeerListStructure;
}

export const mockContext: mockContextStructure = {
  dispatch,
  beerList: [] as BeerListStructure,
};

export const mockLoadBeerListAction = {
  type: BeerListActionType.loadBeerList,
  payload: beerList,
};
export const mockDispatch = jest.spyOn(mockContext, "dispatch");
