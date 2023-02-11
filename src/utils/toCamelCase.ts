import { BeersStructure } from "../data/types";

const convertKebabCaseToCamelCase = (beers: BeersStructure) => {
  return beers.map((beer) => {
    const transformedEntries = Object.entries(beer).map((pair) => [
      pair[0].includes("_")
        ? pair[0].replace(/_./g, (m) => m.toUpperCase()[1])
        : pair[0],
      pair[1],
    ]);
    return Object.fromEntries(transformedEntries);
  });
};

export default convertKebabCaseToCamelCase;
