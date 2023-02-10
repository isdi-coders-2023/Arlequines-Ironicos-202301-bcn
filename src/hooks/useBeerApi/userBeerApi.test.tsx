import { act, renderHook } from "@testing-library/react";
import { Wrapper } from "../../mocks/mockContextProvider";
import { mockDispatch, mockLoadBeersAction } from "../../mocks/mockStore";
import useBeerApi from "./useBeerApi";

describe("Given a useBeerApi custom hook", () => {
  describe("When called inside a component", () => {
    test("Then it should call the dispatcher", async () => {
      const dispatch = mockDispatch;

      const {
        result: {
          current: { getBeersFromApi },
        },
      } = renderHook(() => useBeerApi(), {
        wrapper: Wrapper,
      });

      await act(async () => getBeersFromApi());
      expect(dispatch).toHaveBeenCalledWith(mockLoadBeersAction);
    });
  });
});
