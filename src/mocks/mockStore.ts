import { BeersStructure } from "../data/types";
import {
  BeersAction,
  BeersActionType,
  LoadBeersAction,
} from "../store/actions/beers/types";
import handlerBody from "./handlerResponseBody";

export const dispatch: React.Dispatch<BeersAction> = jest.fn();
export const beers: BeersStructure = handlerBody;

export const mockStore = {
  dispatch,
  beers: [] as BeersStructure,
};
export const mockDispatch = jest.spyOn(mockStore, "dispatch");

export const mockLoadBeersAction: LoadBeersAction = {
  type: BeersActionType.loadBeers,
  payload: beers,
};
