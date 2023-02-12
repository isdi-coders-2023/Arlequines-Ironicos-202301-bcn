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

  const getMostBitterBeersFromApi = useCallback(async () => {
    try {
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}&ibu_gt=80`
      );

      const MostBitterBeersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(MostBitterBeersInformation));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  const getClassicBeersFromApi = useCallback(async () => {
    try {
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}&brewed_before=1-2008`
      );

      const classicBeersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(classicBeersInformation));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  const getStrongestBeersFromApi = useCallback(async () => {
    try {
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}&abv_gt=7`
      );

      const classicBeersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(classicBeersInformation));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  const getBeersFromApi = useCallback(async () => {
    try {
      const responseFromBeerApi = await fetch(
        `${beerApiUrl}page=${currentPage}&per_page=${beersPerPage}`
      );
      const beersInformation = convertKebabCaseToCamelCase(
        await responseFromBeerApi.json()
      ) as CamelCaseBeersStructure;
      dispatch(loadBeersActionCreator(beersInformation));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return {
    getBeersFromApi,
    getClassicBeersFromApi,
    getStrongestBeersFromApi,
    getMostBitterBeersFromApi,
  };
};

export default useBeerApi;
