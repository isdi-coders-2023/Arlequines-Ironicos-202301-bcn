import { CamelCaseBeersStructure } from "../../data/types";
import { useContext, useCallback } from "react";

import BeersContext from "../../store/contexts/beers/BeersContext";
import { loadBeersActionCreator } from "../../store/actions/beers/beersActionCreators";
import convertKebabCaseToCamelCase from "../../utils/convertKebabCaseToCamelCase/convertKebabCaseToCamelCase";

export const currentPage = 1;
export const beersPerPage = 48;
export const beerApiUrl = "https://api.punkapi.com/v2/beers?";

const useBeerApi = () => {
  const { dispatch } = useContext(BeersContext);

  const getBeersFromApi = useCallback(async () => {
    try {
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`
      );
      const beerListInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(beerListInformation));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getBeersFromApi };
};

export default useBeerApi;
