import { background } from "../data";
const Video = () => {
  return (
    <img
      src={background}
      className="blur-lg w-full h-full object-cover fixed"
    />
  );
};

export { Video };
