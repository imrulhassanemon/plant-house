import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./componet/Banner";
import Navbar from "./componet/Navbar";
import Plants from "./componet/Plants";
import type { Tree } from "./types";

function App() {
  const allPlantsPromise = async (): Promise<Tree[]> => {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/plants",
    );
    const data = await res.json();

    console.log(data);
    return data.plants;
  };

  const [coins, setCoins]  = useState(500)

  // const handleGetCoin = () => {
  //   const getCoin = coins + 1000;
  //   setCoins(getCoin)

  return (
    <>
      <Navbar coins={coins} setCoins={setCoins} />
      <Banner />
      <Suspense
        fallback={
          <div className="flex min-h-75 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
          </div>
        }
      >
        <Plants allPlantsPromise={allPlantsPromise()}></Plants>
      </Suspense>
    </>
  );
}

export default App;
