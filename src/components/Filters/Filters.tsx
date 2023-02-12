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
      <Button filter={getClassicBeersFromApi} filterName={"Classics"} />
      <Button filter={getStrongestBeersFromApi} filterName={"Strongest"} />
      <Button filter={getMostBitterBeersFromApi} filterName={"Most Bitter"} />
    </FiltersStyled>
  );
};

export default Filters;
