import useBeerApi from "./hooks/useBeerApi";
import { useEffect } from "react";

const App = (): JSX.Element => {
  const { getBeersFromApi } = useBeerApi();

  useEffect(() => {
    (async () => {
      getBeersFromApi();
    })();
  }, [getBeersFromApi]);

  return <div className="app"></div>;
};

export default App;
