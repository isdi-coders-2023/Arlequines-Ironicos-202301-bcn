import { UiAction, UiActionType } from "../../actions/ui/types";

const uiReducer = (currentIsLoading: boolean, action: UiAction) => {
  let newIsLoading: boolean;

  switch (action.type) {
    case UiActionType.setIsLoading:
      newIsLoading = true;
      break;

    case UiActionType.unsetIsLoading:
      newIsLoading = false;
      break;

    default:
      newIsLoading = currentIsLoading;
  }
  return newIsLoading;
};

export default uiReducer;
