// import { use } from "react";
// import type { Tree } from "../types";
// import PlantsCard from "./PlantsCard";
// import { useState } from "react";
// import SelectedCard from "./SelectedCard";

// export interface PlantsProps {
//   allPlantsPromise: Promise<Tree[]>;
// }

// export default function Plants({ allPlantsPromise }: PlantsProps) {
//   const trees = use(allPlantsPromise);

//   //   const [active, setActive] = useState<"trees" | "selected">("trees");

//   const [active, setActive] = useState<boolean>(true);

//   const [selected, setSelected] = useState<Tree[]>([]);

//   const handleSelected = (tree: Tree) => {
//     let newSelected = [...selected, tree];
//     if(selected.includes(tree)){
//       return
//     }
//     setSelected(newSelected);
//   };

//   const handleRemoved = (tree:Tree) => {
//     let remainingSelected = [...selected, tree]

//     setSelected(remainingSelected)
//   }

//   console.log(trees);

//   return (
//     <>
//       <div>
//         <div className="flex max-w-5/6 mx-auto items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
//           {/* Left Side */}
//           <h2 className="text-xl font-bold text-gray-800">Hello world</h2>

//           {/* Right Side */}
//           <div className="flex items-center gap-2 rounded-xl bg-gray-100 p-1">
//             <button
//               onClick={() => setActive(true)}
//               className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
//                 active === true
//                   ? "bg-green-600 text-white shadow-sm"
//                   : "text-gray-600 hover:text-green-600"
//               }`}
//             >
//               Trees
//             </button>

//             <button
//               onClick={() => setActive(false)}
//               className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
//                 active === false
//                   ? "bg-green-600 text-white shadow-sm"
//                   : "text-gray-600 hover:text-green-600"
//               }`}
//             >
//               Selected
//             </button>
//           </div>
//         </div>
//       </div>
//       <div>
//         {active ? (
//           <div className="grid md:grid-cols-4 gap-5 mt-16 w-5/6 mx-auto">
//             {trees.map((tree) => (
//               <PlantsCard
//                 tree={tree}
//                 handleSelected={handleSelected}
//                 toggle={toggle} setToggle={setToggle}
//               ></PlantsCard>
//             ))}
//           </div>
//         ) : (
//           <div className="mt-10">
//             {selected.map((select) => (
//               <SelectedCard select={select} ></SelectedCard>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import toast from "react-hot-toast";
import { use } from "react";
import { useState } from "react";

import type { Tree } from "../types";

import PlantsCard from "./PlantsCard";
import SelectedCard from "./SelectedCard";

export interface PlantsProps {
  allPlantsPromise: Promise<Tree[]>;
  setCoins: (price: number) => void;
  coins: boolean;
}

export default function Plants({
  allPlantsPromise,
  setCoins,
  coins,
}: PlantsProps) {
  const trees = use(allPlantsPromise);

  const [active, setActive] = useState<boolean>(true);

  const [selected, setSelected] = useState<Tree[]>([]);
  console.log(selected);
  console.log(Array.isArray(selected));

  // Add plant
  const handleSelected = (tree: Tree) => {
    if (coins < tree.price) {
      toast.error("Not enough coins! Please Get Coin");
      return;
    }

    setCoins(coins - tree.price);
    toast.success("SuccessFully Perchase a Tree")

    setSelected((prevSelected) => {
      // Already selected?
      const alreadySelected = prevSelected.some((item) => item.id === tree.id);
      console.log(tree.price);

      if (alreadySelected) {
        return prevSelected;
      }

      return [...prevSelected, tree];
    });
  };

  // Remove plant
  const handleRemoved = (tree: Tree) => {
    setSelected((prevSelected) =>
      prevSelected.filter((item) => item.id !== tree.id),
    );
  };

  return (
    <>
      {/* Header */}
      <div>
        <div className="mx-auto flex max-w-5/6 items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
          {/* Left */}
          <h2 className="text-xl font-bold text-gray-800">Hello world</h2>

          {/* Tabs */}
          <div className="flex items-center gap-2 rounded-xl bg-gray-100 p-1">
            {/* Trees */}
            <button
              type="button"
              onClick={() => setActive(true)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                active
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Trees
            </button>

            {/* Selected */}
            <button
              type="button"
              onClick={() => setActive(false)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                !active
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Selected ({selected.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {active ? (
          /* Trees */
          <div className="mx-auto mt-16 grid w-5/6 gap-5 md:grid-cols-4">
            {trees.map((tree) => {
              // Check whether THIS plant is selected
              const isSelected = selected.some((item) => item.id === tree.id);

              return (
                <PlantsCard
                  key={tree.id}
                  tree={tree}
                  handleSelected={handleSelected}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        ) : (
          /* Selected Plants */
          <div className="mx-auto mt-10 w-5/6">
            {selected.length === 0 ? (
              <p className="text-center text-gray-500">
                No plants selected yet.
              </p>
            ) : (
              selected.map((select) => (
                <SelectedCard
                  key={select.id}
                  select={select}
                  handleRemoved={handleRemoved}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
