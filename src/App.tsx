import useBeerApi from "./hooks/useBeerApi/useBeerApi";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";

const App = (): JSX.Element => {
  const { getBeersFromApi } = useBeerApi();

  useEffect(() => {
    (async () => {
      getBeersFromApi();
    })();
  }, [getBeersFromApi]);

  return (
    <div className="app">
      <NavBar />
    </div>
  );
};

export default App;
