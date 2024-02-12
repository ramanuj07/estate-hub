import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="py-2 mx-2 grid grid-cols-12 items-center">
      <div className="col-span-2 flex items-center justify-center">
        <img src={LOGO_URL} alt="logoImg" className="h-6 cursor-pointer" />
      </div>

      <div className="col-span-5">
        <ul className="flex gap-3 items-center justify-center">
          <li className="cursor-pointer">Buy</li>
          <li className="cursor-pointer">Sell</li>
          <li className="cursor-pointer">Rent</li>
          <li className="cursor-pointer">Mortgage</li>
          <li className="cursor-pointer">Find Realtors</li>
          <li className="cursor-pointer">My Home</li>
          <li className="cursor-pointer">News & Insights</li>
        </ul>
      </div>

      <div className="col-span-3">
        <ul className="flex gap-3 items-center justify-center underline">
          <li className="cursor-pointer">Manage rentals</li>
          <li className="cursor-pointer">Advertise</li>
        </ul>
      </div>

      <div className="col-span-2 flex items-center justify-center gap-4">
        <h1 className="hover:underline cursor-pointer">Login</h1>
        <button className="py-1 px-4 bg-black text-white rounded-full flex items-center">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
