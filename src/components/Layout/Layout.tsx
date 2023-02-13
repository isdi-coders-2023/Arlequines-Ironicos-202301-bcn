import GlobalStyles from "../../GlobalStyles";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import { useContext } from "react";
import UiContext from "../../store/contexts/ui/UiContext";
import Loader from "../Loader/Loader";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UiContext);
  return (
    <>
      <GlobalStyles />
      <Header />
      <NavBar />
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
