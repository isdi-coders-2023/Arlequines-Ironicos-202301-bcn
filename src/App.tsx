import useBeerApi from "./hooks/useBeerApi/useBeerApi";
import { useEffect } from "react";

const App = (): JSX.Element => {
  const { getBeersFromApi } = useBeerApi();

  useEffect(() => {
    getBeersFromApi();
  }, [getBeersFromApi]);

  return <div className="app"></div>;
};

export default App;
