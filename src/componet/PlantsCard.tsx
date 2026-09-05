// import { useState } from "react";
// import type { Tree } from "../types";
// import { Coins, Leaf, ArrowUpRight } from "lucide-react";
// export interface PlantsCardProps {
//   tree: Tree;
//   handleSelected: (tree: Tree) => void;
//   toggle: boolean;
//   setToggle: (toggle: boolean) => void
// }

// export default function PlantsCard({ tree, handleSelected, toggle, setToggle }: PlantsCardProps) {

  

//   const handleBuy = () => {
//     handleSelected(tree)
//     setToggle(!toggle)
//   }


//   return (
//     <>
//       <div className="group w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
//         {" "}
//         {/* Image */}{" "}
//         <div className="relative h-64 overflow-hidden bg-gray-100">
//           {" "}
//           <img
//             src={tree.image}
//             alt={tree.name}
//             className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
//           />{" "}
//           {/* Overlay */}{" "}
//           <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />{" "}
//           {/* Category */}{" "}
//           <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-green-700 shadow-sm">
//             {" "}
//             {tree.category}{" "}
//           </span>{" "}
//           {/* View button */}{" "}
//           <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-sm transition hover:bg-green-600 hover:text-white">
//             {" "}
//             <ArrowUpRight size={19} />{" "}
//           </button>{" "}
//         </div>{" "}
//         {/* Content */}{" "}
//         <div className="p-5">
//           {" "}
//           <div className="flex items-start justify-between gap-3">
//             {" "}
//             <div>
//               {" "}
//               <p className="mb-1 text-xs font-medium uppercase tracking-wider text-green-600">
//                 {" "}
//                 Plant your future{" "}
//               </p>{" "}
//               <h2 className="text-2xl font-bold text-gray-900">
//                 {" "}
//                 {tree.name}{" "}
//               </h2>{" "}
//             </div>{" "}
//           </div>{" "}
//           <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
//             {" "}
//             {tree.description}{" "}
//           </p>{" "}
//           {/* Footer */}{" "}
//           <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
//             {" "}
//             {/* Price */}{" "}
//             <div>
//               {" "}
//               <p className="text-xs text-gray-400">Plant cost</p>{" "}
//               <div className="mt-1 flex items-center gap-1.5">
//                 {" "}
//                 <Coins size={20} className="text-yellow-500" />{" "}
//                 <span className="text-xl font-bold text-gray-900">
//                   {" "}
//                   {tree.price}{" "}
//                 </span>{" "}
//                 <span className="text-sm text-gray-400">coins</span>{" "}
//               </div>{" "}
//             </div>{" "}
//             {/* Button */}{" "}
//            <button
//   onClick={handleBuy}
//   disabled={!toggle}
//   className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
// >
//   <Leaf size={18} />
//   {toggle ? "Buy Now" : "Added"}
// </button>
//           </div>{" "}
//         </div>{" "}
//       </div>
//     </>
//   );
// }



// --------------------------------------------



import type { Tree } from "../types";
import { Coins, Leaf, ArrowUpRight } from "lucide-react";

export interface PlantsCardProps {
  tree: Tree;
  handleSelected: (tree: Tree) => void;
  isSelected: boolean;
}

export default function PlantsCard({
  tree,
  handleSelected,
  isSelected,
}: PlantsCardProps) {
  const handleBuy = () => {
    if (!isSelected) {
      handleSelected(tree);
    }
  };

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={tree.image}
          alt={tree.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-green-700 shadow-sm">
          {tree.category}
        </span>

        {/* View button */}
        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-sm transition hover:bg-green-600 hover:text-white"
        >
          <ArrowUpRight size={19} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-green-600">
              Plant your future
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              {tree.name}
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {tree.description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

          {/* Price */}
          <div>
            <p className="text-xs text-gray-400">
              Plant cost
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <Coins size={20} className="text-yellow-500" />

              <span className="text-xl font-bold text-gray-900">
                {tree.price}
              </span>

              <span className="text-sm text-gray-400">
                coins
              </span>
            </div>
          </div>

          {/* Buy Button */}
          <button
            type="button"
            onClick={handleBuy}
            disabled={isSelected}
            className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Leaf size={18} />

            {isSelected ? "Added" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}