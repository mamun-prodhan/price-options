import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <button
        className={`ms-6  px-4 py-2 text-xl font-extrabold ${
          dark ? "text-white bg-[#000]" : "text-[#000] bg-yellow-400"
        }`}
        onClick={() => setDark(!dark)}
      >
        {dark ? "Light" : "Dark"}
      </button>
      <NavBar></NavBar>
      <PriceOptions dark={dark}></PriceOptions>
    </>
  );
}

export default App;
