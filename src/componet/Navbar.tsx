import { Leaf, Coins } from "lucide-react";

const Navbar = () => {
  const coins = 250;

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <Leaf className="text-green-600" size={24} />
          </div>

          <span className="text-xl font-bold text-green-700">
            GreenLife
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Coin */}
          <div className="flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2">
            <Coins size={20} className="text-yellow-500" />
            <span className="font-semibold text-gray-700">
              {coins}
            </span>
          </div>

          {/* Button */}
          <button className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-700">
            <Leaf size={18} />
            Plant Now
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;