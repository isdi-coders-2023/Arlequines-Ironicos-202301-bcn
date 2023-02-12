import { CamelCaseBeersStructure } from "../data/types";
import {
  BeersAction,
  BeersActionType,
  LoadBeersAction,
} from "../store/actions/beers/types";
import { SetIsLoadingAction, UiActionType } from "../store/actions/ui/types";
import convertKebabCaseToCamelCase from "../utils/convertKebabCaseToCamelCase/convertKebabCaseToCamelCase";
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

export const isLoading = false;
export const uiDispatch: React.Dispatch<any> = jest.fn();
export const mockUiStore = { dispatch: uiDispatch, isLoading };
export const mockUiDispatch = jest.spyOn(mockUiStore, "dispatch");
export const mockSetIsLoading: SetIsLoadingAction = {
  type: UiActionType.setIsLoading,
};

export const isLoadingTrue = true;
export const uiDispatchTrue: React.Dispatch<any> = jest.fn();
export const mockUiStoreTrue = {
  dispatch: uiDispatch,
  isLoading: isLoadingTrue,
};
export const mockUiDispatchTrue = jest.spyOn(mockUiStoreTrue, "dispatch");
