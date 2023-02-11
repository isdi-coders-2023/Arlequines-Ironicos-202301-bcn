import { useReducer, useMemo } from "react";
import beersReducer from "../../reducers/beers/beersReducer";
import BeersContext from "./BeersContext";

export interface BeersContextElementProps {
  children: JSX.Element | JSX.Element[];
}

const BeersContextWrapper = ({
  children,
}: BeersContextElementProps): JSX.Element => {
  const [beers, dispatch] = useReducer(beersReducer, [
    {
      id: 0,
      name: "",
      tagline: "",
      first_brewed: "",
      description: "",
      image_url: "",
      abv: 0,
      ibu: 0,
      volume: {
        value: 0,
        unit: "",
      },
      ingredients: {
        malt: [
          {
            name: "",
            amount: {
              value: 0,
              unit: "",
            },
          },
        ],

        hops: [
          {
            name: "",
            amount: {
              value: 0,
              unit: "",
            },
            add: "",
            attribute: "",
          },
        ],

        yeast: "",
      },
      food_pairing: [""],
      brewers_tips: "",
    },
  ]);

  const beersContextStore = useMemo(() => ({ beers, dispatch }), [beers]);
  return (
    <BeersContext.Provider value={beersContextStore}>
      {children}
    </BeersContext.Provider>
  );
};

export default BeersContextWrapper;
