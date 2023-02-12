import GlobalStyles from "../../GlobalStyles";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Header />
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
