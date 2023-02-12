import { act, renderHook } from "@testing-library/react";
import { errorHandler } from "../../mocks/handlers";
import { Wrapper } from "../../mocks/Wrapper";
import {
  mockDispatch,
  mockLoadBeersAction,
  mockSetIsLoading,
  mockStore,
  mockUiDispatch,
  mockUiStore,
} from "../../mocks/store";
import { server } from "../../mocks/server";
import useBeerApi from "./useBeerApi";

beforeAll(() => jest.clearAllMocks());

const dispatcher = mockDispatch;
const store = mockStore;

const uiStore = mockUiStore;
const uiDispatch = mockUiDispatch;
const setIsLoadingAction = mockSetIsLoading;
const times = 2;

describe("Given the useBeerApi custom hook", () => {
  const dispatch = mockDispatch;
  describe("When the getBeersFromApi function is called", () => {
    test("Then it should call the dispatcher", async () => {
      const {
        result: {
          current: { getBeersFromApi },
        },
      } = renderHook(() => useBeerApi(), {
        wrapper({ children }) {
          return (
            <Wrapper uiStore={uiStore} beersStore={store}>
              {children}
            </Wrapper>
          );
        },
      });

      await act(async () => getBeersFromApi());

      expect(dispatcher).toHaveBeenCalledWith(mockLoadBeersAction);
    });
  });

  test("Then it should call the uiDispatch twice", async () => {
    const {
      result: {
        current: { getBeersFromApi },
      },
    } = renderHook(() => useBeerApi(), {
      wrapper({ children }) {
        return (
          <Wrapper uiStore={uiStore} beersStore={store}>
            {children}
          </Wrapper>
        );
      },
    });

    await act(async () => getBeersFromApi());

    expect(uiDispatch).toHaveBeenCalledTimes(times);
    expect(uiDispatch).toHaveBeenCalledWith(setIsLoadingAction);
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
        wrapper({ children }) {
          return (
            <Wrapper uiStore={uiStore} beersStore={store}>
              {children}
            </Wrapper>
          );
        },
      });

      await act(async () => getBeersFromApi());

      expect(dispatch).not.toBeCalled();
    });
  });
});
