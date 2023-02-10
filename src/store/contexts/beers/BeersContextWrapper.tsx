import { useReducer, useMemo } from "react";
import beersReducer from "../../reducers/beers/beersReducer";
import BeersContext from "./BeersContext";

export interface BeersContextElementProps {
  children: JSX.Element | JSX.Element[];
}

const BeersContextWrapper = ({
  children,
}: BeersContextElementProps): JSX.Element => {
  const [beers, dispatch] = useReducer(beersReducer, []);

  const beersContextStore = useMemo(() => ({ beers, dispatch }), [beers]);
  return (
    <BeersContext.Provider value={beersContextStore}>
      {children}
    </BeersContext.Provider>
  );
};

export default BeersContextWrapper;
