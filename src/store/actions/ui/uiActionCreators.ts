import {
  SetIsLoadingAction,
  UiActionType,
  UnsetIsLoadingAction,
} from "./types";

export const setIsLoadingActionCreator = (): SetIsLoadingAction => ({
  type: UiActionType.setIsLoading,
});

export const unsetIsLoadingActionCreator = (): UnsetIsLoadingAction => ({
  type: UiActionType.unsetIsLoading,
});
