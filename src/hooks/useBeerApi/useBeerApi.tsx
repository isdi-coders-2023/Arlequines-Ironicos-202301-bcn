import { BeersStructure } from "../../data/types";
import { useContext, useCallback } from "react";

import BeersContext from "../../store/contexts/beers/BeersContext";
import { loadBeersActionCreator } from "../../store/actions/beers/beersActionCreators";
import UiContext from "../../store/contexts/ui/UiContext";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/actions/ui/uiActionCreators";

export const currentPage = 1;
export const beersPerPage = 1;
export const beerApiUrl = "https://api.punkapi.com/v2/beers?";

const useBeerApi = () => {
  const { dispatch } = useContext(BeersContext);
  const { dispatch: uiDispatch } = useContext(UiContext);

  const getBeersFromApi = useCallback(async () => {
    uiDispatch(setIsLoadingActionCreator());
    const responseFromBeerApi = await fetch(
      `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`
    );
    const beerListInformation =
      (await responseFromBeerApi.json()) as BeersStructure;
    uiDispatch(unsetIsLoadingActionCreator());
    dispatch(loadBeersActionCreator(beerListInformation));
  }, [dispatch, uiDispatch]);

  return { getBeersFromApi };
};

export default useBeerApi;
