import BeersContext from "../store/contexts/beers/BeersContext";
import { mockContext } from "./mockStore";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <BeersContext.Provider value={mockContext}>
      {children}
    </BeersContext.Provider>
  );
};
