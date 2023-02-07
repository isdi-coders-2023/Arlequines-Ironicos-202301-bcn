import { useReducer } from "react";
import beerListReducer from "../reducers/beerListReducer";
import BeerListContext from "./BeerListContext";

interface BeerListContextElementProps {
  children: JSX.Element | JSX.Element[];
}

const BeerListContextElement = ({
  children,
}: BeerListContextElementProps): JSX.Element => {
  const [beerList, dispatch] = useReducer(beerListReducer, []);
  return (
    <BeerListContext.Provider value={{ beerList, dispatch }}>
      {children}
    </BeerListContext.Provider>
  );
};

export default BeerListContextElement;
