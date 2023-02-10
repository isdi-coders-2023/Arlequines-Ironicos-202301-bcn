import { BeersStructure } from "../data/types";
import { BeersAction } from "../store/actions/beers/types";
import BeersContext from "../store/contexts/beers/BeersContext";
import { mockStore } from "./mockStore";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
export interface MockStoreStructure {
  dispatch: React.Dispatch<BeersAction>;
  beers: BeersStructure;
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <BeersContext.Provider value={mockStore}>{children}</BeersContext.Provider>
  );
};
