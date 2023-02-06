import {
  beerListAction,
  beerListActionType,
  LoadBeerListAction,
} from "../actions/beerList/types";

const beerListReducer = (
  currentBeerList: unknown[],
  action: beerListAction
) => {
  let newBeerList: unknown;

  switch (action.type) {
    case beerListActionType.loadBeerList:
      newBeerList = [...(action as LoadBeerListAction).payload];
      break;

    default:
      newBeerList = currentBeerList;
  }

  return newBeerList;
};

export default beerListReducer;
