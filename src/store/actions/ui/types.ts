export enum UiActionType {
  setIsLoading,
  unsetIsLoading,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface SetIsLoadingAction extends UiAction {
  type: UiActionType.setIsLoading;
}

export interface UnsetIsLoadingAction extends UiAction {
  type: UiActionType.unsetIsLoading;
}
