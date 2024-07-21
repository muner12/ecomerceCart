import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Headers from "./components/Header";
import CartDetails from "./components/CartDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Headers />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
