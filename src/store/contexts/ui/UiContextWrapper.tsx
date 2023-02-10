import { useMemo, useReducer } from "react";
import UiContext from "./UiContext";
import uiReducer from "../../reducers/ui/uiReducer";

export interface UiContextElementProps {
  children: JSX.Element | JSX.Element[];
}

const UiContextWrapper = ({ children }: UiContextElementProps): JSX.Element => {
  const [isLoading, dispatch] = useReducer(uiReducer, true);

  const store = useMemo(() => ({ isLoading, dispatch }), [isLoading, dispatch]);
  return <UiContext.Provider value={store}>{children}</UiContext.Provider>;
};

export default UiContextWrapper;
