import { CamelCaseBeersStructure } from "../../data/types";
import BeerCard from "../BeerCard/BeerCard";
import { BeerListStyled } from "./BeerListStyed";

interface BeerListProps {
  beers: CamelCaseBeersStructure;
}

const BeerList = ({ beers }: BeerListProps): JSX.Element => {
  return (
    <BeerListStyled aria-label="List of Beers">
      {beers.map((beer) => (
        <li key={beer.id}>
          <BeerCard beer={beer} />
        </li>
      ))}
    </BeerListStyled>
  );
};
export default BeerList;
