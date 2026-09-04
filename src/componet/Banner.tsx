import { ArrowRight, Leaf, Sprout } from "lucide-react";

const Banner = () => {
  return (
    <section className="mx-auto mt-6 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl bg-green-700 px-8 py-16 md:px-14">
        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-600 opacity-50" />
        <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-green-800 opacity-40" />

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
          {/* Content */}
          <div className="text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Sprout size={18} />
              <span>Make the world greener</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Plant Today,
              <span className="block text-green-200">Save Tomorrow.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-green-100 md:text-lg">
              Plant trees, earn coins, and help create a greener and healthier
              planet for everyone.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50">
              Start Planting
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Plant Illustration */}
          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-green-600/40">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-green-100 shadow-2xl">
                <Leaf size={120} strokeWidth={1.5} className="text-green-600" />
              </div>

              {/* Floating coin */}
              <div className="absolute right-0 top-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                <span className="text-xl">🪙</span>
                <span className="font-bold text-gray-700">+50</span>
              </div>

              {/* Floating text */}
              <div className="absolute bottom-8 left-0 rounded-xl bg-white px-4 py-3 shadow-lg">
                <p className="text-xs text-gray-500">Trees planted</p>
                <p className="font-bold text-green-700">12,540+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
