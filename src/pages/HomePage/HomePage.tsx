import { useContext, useEffect } from "react";
import useBeerApi from "../../hooks/useBeerApi/useBeerApi";
import BeersContext from "../../store/contexts/beers/BeersContext";

const HomePage = (): JSX.Element => {
  const { getBeersFromApi } = useBeerApi();

  useEffect(() => {
    getBeersFromApi();
  }, [getBeersFromApi]);

  const { beers } = useContext(BeersContext);

  return <></>;
};

export default HomePage;
