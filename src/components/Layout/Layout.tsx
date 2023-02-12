import GlobalStyles from "../../GlobalStyles";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <header role="heading" aria-level={2}>
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
