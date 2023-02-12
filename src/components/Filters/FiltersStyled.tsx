import styled from "styled-components";

const FiltersStyled = styled.ul`
  display: flex;
  gap: 1rem;
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  padding-top: 30px;

  button:hover {
    text-decoration: underline;
  }
`;

export default FiltersStyled;
