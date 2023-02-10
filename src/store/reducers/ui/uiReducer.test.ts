import { UiActionType } from "../../actions/ui/types";
import uiReducer from "./uiReducer";

describe("Given the uiReducer function", () => {
  describe("When called with 'setIsLoading' action", () => {
    test("Then it should replace setIsLoading value to true", () => {
      const setIsLoadingAction = {
        type: UiActionType.setIsLoading,
      };
      const currentIsLoading = false;

      const expectedIsLoading = true;

      const isLoading = uiReducer(currentIsLoading, setIsLoadingAction);

      expect(isLoading).toStrictEqual(expectedIsLoading);
    });
  });
  describe("When called with 'unsetIsloading' action", () => {
    test("Then it should replace unsetIsLoading to false", () => {
      const unsetIsLoadingAction = {
        type: UiActionType.unsetIsLoading,
      };
      const currentIsLoading = true;

      const expectedIsLoading = false;

      const isLoading = uiReducer(currentIsLoading, unsetIsLoadingAction);

      expect(isLoading).toStrictEqual(expectedIsLoading);
    });
  });
  describe("When called with 'default' action", () => {
    test("Then it should return same isLoading value", () => {
      const defaultAction = {
        type: "" as unknown as UiActionType,
      };
      const currentIsLoading = true;

      const expectedIsLoading = true;

      const isLoading = uiReducer(currentIsLoading, defaultAction);

      expect(isLoading).toStrictEqual(expectedIsLoading);
    });
  });
});
