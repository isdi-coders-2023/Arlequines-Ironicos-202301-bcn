import { UiActionType } from "./types";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "./uiActionCreators";

describe("Given a 'setIsLoadingActionCreator' function", () => {
  describe("When it is called", () => {
    test("Then it should return and action type SetIsLoadinAction", () => {
      const expectedSetIsLoadingAction = {
        type: UiActionType.setIsLoading,
      };

      const setIsLoadingAction = setIsLoadingActionCreator();

      expect(setIsLoadingAction).toStrictEqual(expectedSetIsLoadingAction);
    });
  });
});

describe("Given an 'unSetIsLoadingActionCreator' function", () => {
  describe("When it is called", () => {
    test("Then it should return an action type UnsetIsLoadingAction", () => {
      const expectedUnsetIsLoadingAction = {
        type: UiActionType.unsetIsLoading,
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();

      expect(unsetIsLoadingAction).toStrictEqual(expectedUnsetIsLoadingAction);
    });
  });
});
