import { background } from "../data";
const Background = () => {
  return (
    <img
      src={background}
      className="blur-lg w-full h-full object-cover fixed"
    />
  );
};

export { Background };
