import { BeersStructure } from "../data/types";
import { BeersAction, BeersActionType } from "../store/actions/beers/types";

export const beers: BeersStructure = [];
export const dispatch = jest.fn();

export interface MockContextStructure {
  dispatch: React.Dispatch<BeersAction>;
  beers: BeersStructure;
}

export const mockContext: MockContextStructure = {
  dispatch,
  beers: [] as BeersStructure,
};

export const mockLoadBeersAction = {
  type: BeersActionType.loadBeers,
  payload: beers,
};
export const mockDispatch = jest.spyOn(mockContext, "dispatch");
