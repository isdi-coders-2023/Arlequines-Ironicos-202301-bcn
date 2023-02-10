import { BeersStructure } from "../../data/types";
import { useContext, useCallback } from "react";

import BeersContext from "../../store/contexts/beers/BeersContext";
import { loadBeersActionCreator } from "../../store/actions/beers/beersActionCreators";

export const currentPage = 1;
export const beersPerPage = 12;
export const beerApiUrl = "https://api.punkapi.com/v2/beers?";

const useBeerApi = () => {
  const { dispatch } = useContext(BeersContext);

  const getBeersFromApi = useCallback(async () => {
    const responseFromBeerApi = await fetch(
      `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`
    );
    const beerListInformation =
      (await responseFromBeerApi.json()) as BeersStructure;

    dispatch(loadBeersActionCreator(beerListInformation));
  }, [dispatch]);

  return { getBeersFromApi };
};

export default useBeerApi;
