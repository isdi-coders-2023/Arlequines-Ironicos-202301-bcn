import styled from "styled-components";

const NavBarStyled = styled.nav`
  position: fixed;
  height: 70px;
  bottom: 0;
  width: 100vw;
  background-color: var(--color-primary-white);
  z-index: 10;

  .navbar__content {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    position: relative;
    width: 24.375rem;
  }
`;

export default NavBarStyled;
