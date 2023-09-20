import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <button
        className={`ms-6  px-4 rounded-lg py-2 text-xl font-extrabold ${
          dark ? "text-white bg-[#000]" : "text-[#000] bg-yellow-400"
        }`}
        onClick={() => setDark(!dark)}
      >
        {dark ? (
          <div className="flex gap-2 items-center">
            Light<BsFillSunFill></BsFillSunFill>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            Dark
            <BsFillMoonStarsFill></BsFillMoonStarsFill>
          </div>
        )}
      </button>
      <NavBar></NavBar>
      <PriceOptions dark={dark}></PriceOptions>
    </>
  );
}

export default App;
