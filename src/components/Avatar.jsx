import { avatar, name } from "../data";

const Avatar = () => {
  return (
    <div>
      <img
        className="rounded-full w-40 duration-300 hover:bg-slate-100 hover:p-2 hover:cursor-pointer mx-auto"
        src={avatar}
        alt="Image not found"
      />
      <p className="text-xl font-medium border rounded-full duration-300 text-center py-0 px-2 text-white mt-2 hover:text-slate-200 hover:cursor-pointer">
        {name}
      </p>
    </div>
  );
};

export { Avatar };
