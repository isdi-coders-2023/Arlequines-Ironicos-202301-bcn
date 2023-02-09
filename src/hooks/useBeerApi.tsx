import { BeerListStructure } from "../data/types";
import { useContext, useCallback } from "react";
import { loadBeerListActionCreator } from "../store/actions/beerList/beerListActionCreators";
import BeerListContext from "../store/context/BeerListContext";

export const currentPage = 1;
export const beersPerPage = 1;
export const beerApiUrl = "https://api.punkapi.com/v2/beers?";

const useBeerApi = () => {
  const { dispatch } = useContext(BeerListContext);

  const getBeersFromApi = useCallback(async () => {
    const responseFromBeerApi = await fetch(
      `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`
    );
    const beerListInformation =
      (await responseFromBeerApi.json()) as BeerListStructure;

    dispatch(loadBeerListActionCreator(beerListInformation));
  }, [dispatch]);

  return { getBeersFromApi };
};

export default useBeerApi;
