import useBeerApi from "../../hooks/useBeerApi/useBeerApi";
import Button from "../Button/Button";
import FiltersStyled from "./FiltersStyled";

const Filters = () => {
  const {
    getStrongestBeersFromApi,
    getClassicBeersFromApi,
    getMostBitterBeersFromApi,
  } = useBeerApi();

  return (
    <FiltersStyled className="filters">
      <li>
        <Button filter={getClassicBeersFromApi} filterName={"Classics"} />
      </li>
      <li>
        <Button filter={getStrongestBeersFromApi} filterName={"Strongest"} />
      </li>
      <li>
        <Button filter={getMostBitterBeersFromApi} filterName={"Most Bitter"} />
      </li>
    </FiltersStyled>
  );
};

export default Filters;
