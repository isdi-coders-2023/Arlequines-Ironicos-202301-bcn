interface ButtonProps {
  filter: () => Promise<string | undefined>;
  filterName: string;
}

const Button = ({ filter, filterName }: ButtonProps): JSX.Element => {
  return <button onClick={() => filter()}>{filterName}</button>;
};

export default Button;
