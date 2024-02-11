import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="p-2 m-2 grid grid-cols-12 items-center">
      <div className="col-span-2 flex items-center justify-center">
        <img src={LOGO_URL} alt="logoImg" className="h-6" />
      </div>

      <div className="col-span-5">
        <ul className="flex gap-3 items-center justify-center">
          <li>Buy</li>
          <li>Sell</li>
          <li>Rent</li>
          <li>Mortgage</li>
          <li>Find Realtors</li>
          <li>My Home</li>
          <li>News & Insights</li>
        </ul>
      </div>

      <div className="col-span-3">
        <ul className="flex gap-3 items-center justify-center">
          <li>Manage rentals</li>
          <li>Advertise</li>
        </ul>
      </div>

      <div className="col-span-2 flex items-center justify-center">
        <button className="py-2 px-4 bg-black text-white rounded-full flex items-center">
          Login/Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
