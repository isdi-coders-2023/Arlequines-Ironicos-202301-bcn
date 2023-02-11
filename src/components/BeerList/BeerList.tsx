import { BeersStructure } from "../../data/types";
import BeerCard from "../BeerCard/BeerCard";
import { BeerListStyled } from "./BeerListStyed";

interface BeerListProps {
  beers: BeersStructure;
}

const BeerList = ({ beers }: BeerListProps): JSX.Element => {
  return (
    <BeerListStyled>
      {beers.map((beer) => (
        <li key={beer.id}>
          <BeerCard beer={beer} />
        </li>
      ))}
    </BeerListStyled>
  );
};
export default BeerList;
