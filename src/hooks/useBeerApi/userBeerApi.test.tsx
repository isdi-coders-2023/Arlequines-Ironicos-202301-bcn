import { act, renderHook } from "@testing-library/react";
import { errorHandler } from "../../mocks/handlers";
import { Wrapper } from "../../mocks/mockContextProvider";
import { mockDispatch, mockLoadBeersAction } from "../../mocks/mockStore";
import { server } from "../../mocks/server";
import useBeerApi from "./useBeerApi";

beforeAll(() => jest.clearAllMocks());

describe("Given a useBeerApi custom hook", () => {
  const dispatch = mockDispatch;
  describe("When called inside a component", () => {
    test("Then it should call the dispatcher", async () => {
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
  describe("When the getBeersFromApi function is called and the response of the fetch fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandler);
    });
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getBeersFromApi },
        },
      } = renderHook(() => useBeerApi(), {
        wrapper: Wrapper,
      });

      await act(async () => getBeersFromApi());

      expect(dispatch).not.toBeCalled();
    });
  });
});
