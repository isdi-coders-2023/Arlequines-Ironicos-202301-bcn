import styled from "styled-components";

const NavBarStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 70px;
  bottom: 0;
  width: 100%;
  background-color: var(--color-button-brown);
  padding: 1.5rem;
  a {
    color: var(--color-primary-white);
  }
`;

export default NavBarStyled;
