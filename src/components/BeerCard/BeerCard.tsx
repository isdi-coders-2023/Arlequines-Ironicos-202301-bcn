import { CamelCaseBeerStructure } from "../../data/types";
import { BeerCardStyled } from "./BeerCardStyled";

interface BeerCardProps {
  beer: CamelCaseBeerStructure;
}

const BeerCard = ({
  beer: { name, abv, tagline, imageUrl, firstBrewed, id },
}: BeerCardProps): JSX.Element => {
  return (
    <BeerCardStyled className={`beer-card${id % 2 !== 0 ? "-odd" : "-pair"}`}>
      <div className="beer-card__main-content">
        <div className="beer-card__description">
          <span className="beer-card__alcohol">{`${abv}º`}</span>
          <h2 className="beer-card__name">{`${name}`}</h2>
          <p className="beer-card__tagLine">{`${tagline}`}</p>
          <span className="beer-card__date">{`${firstBrewed}`}</span>
        </div>
        <div className="beer-card__photo-container">
          <img
            className="beer-card__photo"
            src={`${
              imageUrl === "https://images.punkapi.com/v2/keg.png"
                ? "media/keg.png"
                : imageUrl
            }`}
            alt={`${name} beer`}
            width={89}
            height={350}
          />
        </div>
      </div>

      <div className="beer-card__button-section">
        <button className="beer-card__my-beer-button">
          <span className="beer-card__button-text">Add to my beers</span>

          <svg
            className="beer-card__button-icon"
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9965 19.422V19.4048C30.5093 17.8032 28.4305 16.8215 26.1151 16.8215C21.6364 16.8215 18.0028 20.5242 18.0028 25.0879C18.0028 27.2062 18.7971 29.135 20.0816 30.5989C21.5688 32.2866 23.7152 33.3544 26.1151 33.3544C30.5938 33.3544 34.2274 29.6517 34.2274 25.0879C34.2274 22.9008 33.3824 20.9031 31.9965 19.422ZM29.1403 26.4829H27.3827V28.3601C27.3827 29.0662 26.808 29.6517 26.1151 29.6517C25.4222 29.6517 24.8476 29.0662 24.8476 28.3601V26.4829H23.0899C22.3801 26.4829 21.8224 25.9146 21.8224 25.1913C21.8224 24.4852 22.3632 23.9169 23.073 23.8996H24.8476V22.1775C24.8476 22.143 24.8476 22.1086 24.8645 22.0741C24.8983 21.4197 25.456 20.8859 26.1151 20.8859C26.7911 20.8859 27.3489 21.4369 27.3827 22.1258V23.8996H29.1403C29.8502 23.8996 30.4079 24.4852 30.4079 25.1913C30.4079 25.9146 29.8502 26.4829 29.1403 26.4829Z"
              fill="#EFE4C8"
            />
            <path
              d="M34.2274 10.5046C34.2274 12.554 33.9063 14.4484 33.3486 16.205C33.2472 16.5666 32.8247 16.67 32.5205 16.4461C30.666 15.0514 28.4199 14.3026 26.1151 14.3106C20.2506 14.3106 15.4677 19.1843 15.4677 25.1603C15.4677 27.0202 15.9409 28.8457 16.8367 30.4645C17.1071 30.9468 16.786 31.5667 16.2789 31.3773C12.2059 29.9651 3.97528 24.8158 1.30498 16.205C0.74726 14.4484 0.426147 12.554 0.426147 10.5046C0.426147 5.18311 4.63441 0.877686 9.8229 0.877686C12.8819 0.877686 15.6198 2.39319 17.3268 4.71812C18.1986 3.52778 19.3308 2.56092 20.6333 1.89427C21.9359 1.22763 23.373 0.879555 24.8307 0.877686C30.0192 0.877686 34.2274 5.18311 34.2274 10.5046Z"
              fill="#EFE4C8"
            />
          </svg>
        </button>
      </div>
    </BeerCardStyled>
  );
};

export default BeerCard;
