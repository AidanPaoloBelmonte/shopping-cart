import { useState } from "react";

import Header from "./components/header";

import "./App.css";

function App() {
  const [currentContext, setContext] = useState(0);
  const [cartItems, setCartItems] = useState([""]);

  return (
    <>
      <Header currentContext={currentContext} cartItems={cartItems}></Header>
    </>
  );
}

export default App;
