import { CamelCaseBeersStructure } from "../../data/types";
import { useContext, useCallback } from "react";

import BeersContext from "../../store/contexts/beers/BeersContext";
import { loadBeersActionCreator } from "../../store/actions/beers/beersActionCreators";
import convertKebabCaseToCamelCase from "../../utils/convertKebabCaseToCamelCase/convertKebabCaseToCamelCase";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/actions/ui/uiActionCreators";

import UiContext from "../../store/contexts/ui/UiContext";

export const currentPage = 1;
export const beersPerPage = 40;
export const beerApiUrl = "https://api.punkapi.com/v2/beers?";

const useBeerApi = () => {
  const { dispatch } = useContext(BeersContext);
  const { dispatch: uiDispatch } = useContext(UiContext);

  const getMostBitterBeersFromApi = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}&ibu_gt=80`
      );

      const MostBitterBeersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(MostBitterBeersInformation));
      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, uiDispatch]);

  const getClassicBeersFromApi = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}&brewed_before=1-2008`
      );

      const classicBeersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(classicBeersInformation));
      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, uiDispatch]);

  const getStrongestBeersFromApi = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}&abv_gt=8`
      );

      const StrongestBeersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(StrongestBeersInformation));
      uiDispatch(unsetIsLoadingActionCreator());
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, uiDispatch]);

  const getBeersFromApi = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`
      );
      const beersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      uiDispatch(unsetIsLoadingActionCreator());
      dispatch(loadBeersActionCreator(beersInformation));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, uiDispatch]);

  return {
    getBeersFromApi,
    getClassicBeersFromApi,
    getStrongestBeersFromApi,
    getMostBitterBeersFromApi,
  };
};

export default useBeerApi;
