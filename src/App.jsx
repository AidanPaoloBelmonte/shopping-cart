import { useState } from "react";

import Header from "./components/header";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([""]);

  return (
    <>
      <Header cartItems={cartItems}></Header>
    </>
  );
}

export default App;
