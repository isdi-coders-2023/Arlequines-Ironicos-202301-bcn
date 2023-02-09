import styled from "styled-components";

export const BeerCardStyled = styled.article`
  .beer-card {
    flex-direction: column;
    justify-content: space-between;
    display: flex;

    background-color: var(--color-icon-cream);
    width: 330px;
    height: 534px;
    border-radius: var(--border-radius-standard);

    &__main-content {
      display: flex;
      margin: 20px;
    }

    &__description {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 145px;
    }

    &__alcohol {
      background-color: var(--color-primary-dark-grey);
      backdrop-filter: blur(var(--font-size-tag-line));
      color: var(--color-primary-white);
      font-family: var(--font-primary);
      font-size: var(--font-size-button);
      text-align: center;
      align-items: center;
      border-radius: var(--border-radius-standard) var(--border-radius-minimum);
      padding: 17px;
      height: 40px;
      width: 85px;
    }

    &__name {
      font-size: var(--font-size-title);
      margin: 0px;
    }

    &__tagLine {
      font-size: var(--font-size-tag-line);
      margin: 0px;
    }

    &__date {
      font-size: var(--font-size-ingredint);
      margin: 0px;
    }

    &__photo-container {
      flex: 1;
      display: flex;
      justify-content: center;
      max-width: 100vh;
    }

    &__button-section {
      display: flex;
    }

    &__my-beer-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      height: 92px;
      background-color: var(--color-secondary-grey);
      border-radius: var(--border-radius-standard);
      margin: 20px;
      padding: 26px;
      font-size: var(--font-size-button);
      text-align: left;
      color: var(--color-icon-white);
      border: 0 none;

      &:hover {
        background-color: var(--color-primary-dark-grey);
        transition: 0.7s;
      }
    }
  }
`;
