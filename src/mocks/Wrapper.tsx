import { CamelCaseBeersStructure } from "../data/types";
import BeersContext from "../store/contexts/beers/BeersContext";
import UiContext from "../store/contexts/ui/UiContext";

export interface BeersStoreStructure {
  dispatch: React.Dispatch<any>;
  beers: CamelCaseBeersStructure;
}

export interface UiStoreStructure {
  dispatch: React.Dispatch<any>;
  isLoading: boolean;
}

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  beersStore: BeersStoreStructure;
  uiStore: UiStoreStructure;
}

export const Wrapper = ({
  children,
  beersStore,
  uiStore,
}: WrapperProps): JSX.Element => {
  return (
    <UiContext.Provider value={uiStore}>
      <BeersContext.Provider value={beersStore}>
        {children}
      </BeersContext.Provider>
    </UiContext.Provider>
  );
};
