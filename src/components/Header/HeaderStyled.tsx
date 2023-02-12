import styled from "styled-components";

const HeaderStyled = styled.div`
  background-color: var(--color-primary-white);
  display: flex;
  justify-content: center;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export default HeaderStyled;
