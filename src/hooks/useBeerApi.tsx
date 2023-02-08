import { BeerListStructure } from "../data/types";
import { useContext, useCallback } from "react";
import { loadBeerListActionCreator } from "../store/actions/beerList/beerListActionCreators";
import BeerListContext from "../store/context/BeerListContext";

const useBeerApi = () => {
  const { dispatch } = useContext(BeerListContext);

  const getBeersFromApi = useCallback(async () => {
    const currentPage = 1;
    const beersPerPage = 12;
    const beerApiUrl = process.env.REACT_APP_PUNKAPI;
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
