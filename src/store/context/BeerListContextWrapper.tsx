import { useReducer, useMemo } from "react";
import beerListReducer from "../reducers/beerListReducer";
import BeerListContext from "./BeerListContext";

export interface BeerListContextElementProps {
  children: JSX.Element | JSX.Element[];
}

const BeerListContextWrapper = ({
  children,
}: BeerListContextElementProps): JSX.Element => {
  const [beerList, dispatch] = useReducer(beerListReducer, []);

  const beerListContextMemo = useMemo(
    () => ({ beerList, dispatch }),
    [beerList]
  );
  return (
    <BeerListContext.Provider value={beerListContextMemo}>
      {children}
    </BeerListContext.Provider>
  );
};

export default BeerListContextWrapper;
