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

  test("Then it should call the uiDispatch twice for getBeersFromApi function", async () => {
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

      expect(dispatcher).not.toBeCalled();
    });
  });

  describe("When the getMostBitterBeersFromApi function is called", () => {
    test("Then it should call the dispatcher", async () => {
      const {
        result: {
          current: { getMostBitterBeersFromApi },
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

      await act(async () => getMostBitterBeersFromApi());

      expect(dispatcher).toHaveBeenCalledWith(mockLoadBeersAction);
    });
  });

  test("Then it should call the uiDispatch twice for getMostBitterBeersFromApi function", async () => {
    const {
      result: {
        current: { getMostBitterBeersFromApi },
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

    await act(async () => getMostBitterBeersFromApi());

    expect(uiDispatch).toHaveBeenCalledTimes(times);
    expect(uiDispatch).toHaveBeenCalledWith(setIsLoadingAction);
  });
  describe("When the getMostBitterBeersFromApi function is called and the response of the fetch fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandler);
    });
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getMostBitterBeersFromApi },
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

      await act(async () => getMostBitterBeersFromApi());

      expect(dispatcher).not.toBeCalled();
    });
  });

  describe("When the getClassicBeersFromApi function is called", () => {
    test("Then it should call the dispatcher", async () => {
      const {
        result: {
          current: { getClassicBeersFromApi },
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

      await act(async () => getClassicBeersFromApi());

      expect(dispatcher).toHaveBeenCalledWith(mockLoadBeersAction);
    });
  });

  test("Then it should call the uiDispatch twice for getClassicBeersFromApi function", async () => {
    const {
      result: {
        current: { getClassicBeersFromApi },
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

    await act(async () => getClassicBeersFromApi());

    expect(uiDispatch).toHaveBeenCalledTimes(times);
    expect(uiDispatch).toHaveBeenCalledWith(setIsLoadingAction);
  });
  describe("When the getClassicBeersFromApi function is called and the response of the fetch fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandler);
    });
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getClassicBeersFromApi },
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

      await act(async () => getClassicBeersFromApi());

      expect(dispatcher).not.toBeCalled();
    });
  });

  describe("When the getStrongestBeersFromApi function is called", () => {
    test("Then it should call the dispatcher", async () => {
      const {
        result: {
          current: { getStrongestBeersFromApi },
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

      await act(async () => getStrongestBeersFromApi());

      expect(dispatcher).toHaveBeenCalledWith(mockLoadBeersAction);
    });
  });

  test("Then it should call the uiDispatch twice getStrongestBeersFromApi function", async () => {
    const {
      result: {
        current: { getStrongestBeersFromApi },
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

    await act(async () => getStrongestBeersFromApi());

    expect(uiDispatch).toHaveBeenCalledTimes(times);
    expect(uiDispatch).toHaveBeenCalledWith(setIsLoadingAction);
  });
  describe("When the getStrongestBeersFromApi function is called and the response of the fetch fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandler);
    });
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { getStrongestBeersFromApi },
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

      await act(async () => getStrongestBeersFromApi());

      expect(dispatcher).not.toBeCalled();
    });
  });
});
