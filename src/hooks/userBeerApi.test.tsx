import { renderHook, waitFor } from "@testing-library/react";
import { Wrapper } from "../mocks/mockContextProvider";
import { mockDispatch } from "../mocks/mockStore";
import useBeerApi from "./useBeerApi";

describe("Given a useBeerApi custom hook", () => {
  describe("When called inside a component", () => {
    test("Then it should call the dispatcher", async () => {
      const dispatch = mockDispatch;
      const {
        result: {
          current: { getBeersFromApi },
        },
      } = renderHook(() => useBeerApi(), { wrapper: Wrapper });

      await waitFor(async () => getBeersFromApi());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
