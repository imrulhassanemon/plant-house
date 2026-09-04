import { use } from "react";
import type { Tree } from "../types";
import PlantsCard from "./PlantsCard";
import { useState } from "react";
import SelectedCard from "./SelectedCard";

export interface PlantsProps {
  allPlantsPromise: Promise<Tree[]>;
}

export default function Plants({ allPlantsPromise }: PlantsProps) {
  const trees = use(allPlantsPromise);

//   const [active, setActive] = useState<"trees" | "selected">("trees");

    const [active, setActive] = useState<boolean>(true)

    const [selected, setSelected] = useState<Tree[]>([])

    const handleSelected = (tree: Tree) => {
      let newSelected = [...selected, tree ]
      setSelected(newSelected)
      console.log(newSelected);
    }


  console.log(trees);

  return (
    <>
    <div>
          <div className="flex max-w-5/6 mx-auto items-center justify-between rounded-2xl bg-white px-6 py-4 shadow-sm">
      
      {/* Left Side */}
      <h2 className="text-xl font-bold text-gray-800">
        Hello world
      </h2>

      {/* Right Side */}
      <div className="flex items-center gap-2 rounded-xl bg-gray-100 p-1">
        <button
          onClick={() => setActive(true)}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            active === true
              ? "bg-green-600 text-white shadow-sm"
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          Trees
        </button>

        <button
          onClick={() => setActive(false)}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            active === false
              ? "bg-green-600 text-white shadow-sm"
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          Selected
        </button>
      </div>
    </div>
    </div>
      <div >
        {
            active? <div className="grid md:grid-cols-4 gap-5 mt-16 w-5/6 mx-auto">{trees.map((tree) => (
          <PlantsCard tree={tree} handleSelected={handleSelected}></PlantsCard>
        ))}</div>: <div>
          {
            selected.map((select) => <SelectedCard select={select}></SelectedCard>)
          }
        </div>
        }
      </div>
    </>
  );
}
