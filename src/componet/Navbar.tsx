// import { Leaf, Coins } from "lucide-react";

//   export interface NavbarProps {
//     coins: number
//     setCoins: (value: number) => void
//     }
  
//   export default function Navbar({  coins }: NavbarProps) {


//     const increaseCoin = () => {
      
//     }
    
//     return (//max-w-7xl
//     <nav className="w-full bg-white shadow-sm">
//       <div className="mx-auto flex max-w-5/6  items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
//         {/* Logo */}
//         <div className="flex shrink-0 items-center gap-2">
//           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 sm:h-10 sm:w-10">
//             <Leaf className="text-green-600" size={22} />
//           </div>

//           <span className="text-lg font-bold text-green-700 sm:text-xl">
//             GreenLife
//           </span>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           {/* Coin */}
//           <div className="flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-2 sm:gap-2 sm:px-4">
//             <Coins size={18} className="text-yellow-500 sm:h-5 sm:w-5" />

//             <span className="text-sm font-semibold text-gray-700 sm:text-base">
//               {coins}
//             </span>
//           </div>

//           {/* Button */}
//           <button onClick={handleGetCoin} className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-700 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-base">
//             <Leaf size={17} />
//             <span>Get Coin</span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   ); 
//   }





import { Leaf, Coins } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export interface NavbarProps {
  coins: number;
  setCoins: Dispatch<SetStateAction<number>>;
}

export default function Navbar({ coins, setCoins }: NavbarProps) {
  const increaseCoin = () => {
    setCoins((prevCoins) => prevCoins + 500);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex lg:max-w-5/6 items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 sm:h-10 sm:w-10">
            <Leaf className="text-green-600" size={22} />
          </div>

          <span className="text-lg font-bold text-green-700 sm:text-xl">
            GreenLife
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Coin */}
          <div className="flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-2 sm:gap-2 sm:px-4">
            <Coins
              size={18}
              className="text-yellow-500 sm:h-5 sm:w-5"
            />

            <span className="text-sm font-semibold text-gray-700 sm:text-base">
              {coins}
            </span>
          </div>

          {/* Get Coin Button */}
          <button
            onClick={increaseCoin}
            className="flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-700 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-base"
          >
            <Leaf size={17} />
            <span>Get Coin</span>
          </button>

        </div>
      </div>
    </nav>
  );
}