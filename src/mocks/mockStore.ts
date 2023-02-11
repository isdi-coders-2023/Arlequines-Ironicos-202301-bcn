import { CamelCaseBeersStructure } from "../data/types";
import {
  BeersAction,
  BeersActionType,
  LoadBeersAction,
} from "../store/actions/beers/types";
import convertKebabCaseToCamelCase from "../utils/toCamelCase";
import handlerBody from "./handlerResponseBody";

export const dispatch: React.Dispatch<BeersAction> = jest.fn();
export const beers: CamelCaseBeersStructure =
  convertKebabCaseToCamelCase(handlerBody);

export const mockStore = {
  dispatch,
  beers: [] as CamelCaseBeersStructure,
};
export const mockDispatch = jest.spyOn(mockStore, "dispatch");

export const mockLoadBeersAction: LoadBeersAction = {
  type: BeersActionType.loadBeers,
  payload: beers,
};
