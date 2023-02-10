import { useContext, useEffect } from "react";
import BeerList from "../../components/BeerList/BeerList";
import useBeerApi from "../../hooks/useBeerApi/useBeerApi";
import BeersContext from "../../store/contexts/beers/BeersContext";

const HomePage = (): JSX.Element => {
  const { getBeersFromApi } = useBeerApi();

  useEffect(() => {
    getBeersFromApi();
  }, [getBeersFromApi]);

  const { beers } = useContext(BeersContext);

  return (
    <>
      <BeerList beers={beers} />
    </>
  );
};

export default HomePage;
