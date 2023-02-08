import { useReducer, useMemo } from "react";
import beerListReducer from "../reducers/beerListReducer";
import BeerListContext from "./BeerListContext";

interface BeerListContextElementProps {
  children: JSX.Element | JSX.Element[];
}

const BeerListContextElement = ({
  children,
}: BeerListContextElementProps): JSX.Element => {
  const [beerList, dispatch] = useReducer(beerListReducer, []);

  const beerListContextMemo = useMemo(
    () => ({ beerList, dispatch }),
    [beerList, dispatch]
  );
  return (
    <BeerListContext.Provider value={beerListContextMemo}>
      {children}
    </BeerListContext.Provider>
  );
};

export default BeerListContextElement;
