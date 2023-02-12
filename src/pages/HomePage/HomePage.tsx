import { useContext, useEffect } from "react";
import BeerList from "../../components/BeerList/BeerList";
import useBeerApi from "../../hooks/useBeerApi/useBeerApi";
import BeersContext from "../../store/contexts/beers/BeersContext";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getBeersFromApi } = useBeerApi();

  useEffect(() => {
    getBeersFromApi();
  }, [getBeersFromApi]);

  const { beers } = useContext(BeersContext);

  return (
    <HomePageStyled>
      <BeerList beers={beers} />
    </HomePageStyled>
  );
};

export default HomePage;
