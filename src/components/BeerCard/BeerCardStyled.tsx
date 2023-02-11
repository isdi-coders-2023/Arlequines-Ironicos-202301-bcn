import styled from "styled-components";

export const BeerCardStyled = styled.article`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  margin: 25px;
  width: 330px;
  height: 534px;
  border-radius: var(--border-radius-standard);

  .beer-card {
    &-odd {
      background-color: var(--color-secondary-light-grey);
    }
    &-pair {
      background-color: var(--color-icon-cream);
    }
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
      padding: 15px;
      height: 60px;
      width: 85px;
    }

    &__name {
      font-size: var(--font-size-title);
      margin: 0px;
      padding-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
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
      max-width: 100vw;
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
      transition: 0.3s;

      &:hover {
        background-color: var(--color-primary-dark-grey);
        transition: 0.3s;
      }
      &__button-icon {
        background-color: var(--color-primary-dark-grey);
      }
    }
  }
`;
