import styled from "styled-components";

export const BeerCardStyled = styled.article`
  .beer-card {
    flex-direction: column;
    justify-content: space-between;
    display: flex;

    background-color: #d4d3d3;
    width: 330px;
    height: 534px;
    border-radius: 20px;

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
      background-color: #22151f;
      backdrop-filter: blur(15.1667px);
      color: #ffffff;
      font-family: Arial, Helvetica, sans-serif sans-serif;
      font-size: 25px;
      text-align: center;
      align-items: center;
      border-radius: 20px 2px;
      padding: 17px;
      height: 40px;
      width: 85px;
    }

    &__name {
      font-size: 29px;
      margin: 0px;
    }

    &__tagLine {
      font-size: 16px;
      margin: 0px;
    }

    &__date {
      font-size: 20px;
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
      background-color: #545454;
      border-radius: 20px;
      margin: 20px;
      padding: 26px;
      font-size: 20px;
      text-align: left;
      color: white;
      border: 0 none;

      &:hover {
        background-color: #2c3245;
        transition: 0.7s;
      }
    }
  }
`;
