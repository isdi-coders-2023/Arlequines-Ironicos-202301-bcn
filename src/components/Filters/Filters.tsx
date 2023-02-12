import FiltersStyled from "./FiltersStyled";

const Filters = () => {
  return (
    <FiltersStyled className="filters">
      <li>
        <button>Classics</button>
      </li>
      <li>
        <button>Strongest</button>
      </li>
      <li>
        <button>Most Bitter</button>
      </li>
    </FiltersStyled>
  );
};

export default Filters;
