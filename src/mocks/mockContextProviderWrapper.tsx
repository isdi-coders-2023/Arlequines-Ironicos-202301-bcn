import BeerListContext from "../store/context/BeerListContext";
import { mockContext } from "./mockStore";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <BeerListContext.Provider value={mockContext}>
      {children}
    </BeerListContext.Provider>
  );
};
