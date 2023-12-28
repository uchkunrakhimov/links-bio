import { Video, Avatar, Socials } from "../components";

const Home = () => {
  return (
    <section className="relative w-full h-screen">
      <Video />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Avatar />
        <Socials />
      </div>
    </section>
  );
};

export default Home;
