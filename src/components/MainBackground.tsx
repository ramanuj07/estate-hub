import { MAIN_BG_IMAGE } from "../utils/constants";

const MainBackground = () => {
  return (
    <div>
      <div className="absolute">
        <img src={MAIN_BG_IMAGE} alt="mainBgImage" />
      </div>

      <div className="pl-20 w-1/2 absolute my-20 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-6xl">
          The #1 site real estate professionals trust*
        </h1>

        <div className="py-10">
          <ul className="flex gap-6 font-medium">
            <li className="cursor-pointer hover:underline">Buy</li>
            <li className="cursor-pointer hover:underline">Rent</li>
            <li className="cursor-pointer hover:underline">Sell</li>
            <li className="cursor-pointer hover:underline">Pre-approval</li>
            <li className="cursor-pointer hover:underline">Just sold</li>
            <li className="cursor-pointer hover:underline">Home Value</li>
          </ul>
        </div>

        <div>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Address, School, City, Zip or Neigbourhood"
              className="w-3/4 rounded-full p-4 text-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainBackground;
