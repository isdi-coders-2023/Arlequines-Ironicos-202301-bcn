import { CamelCaseBeersStructure } from "../../../data/types";
import { BeersActionType, LoadBeersAction } from "./types";

export const loadBeersActionCreator = (
  beers: CamelCaseBeersStructure
): LoadBeersAction => ({
  type: BeersActionType.loadBeers,
  payload: beers,
});
