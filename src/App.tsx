import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
