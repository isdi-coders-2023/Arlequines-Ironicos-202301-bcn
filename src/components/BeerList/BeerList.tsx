import { BeersStructure } from "../../data/types";
import BeerCard from "../BeerCard/BeerCard";
interface BeerListProps {
  beers: BeersStructure;
}

const BeerList = ({ beers }: BeerListProps): JSX.Element => {
  return (
    <>
      {beers.map((beer) => (
        <li key={beer.id}>
          <BeerCard beer={beer} />
        </li>
      ))}
    </>
  );
};
export default BeerList;
