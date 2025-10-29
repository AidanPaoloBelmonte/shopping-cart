import { useState } from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router";

import Header from "./components/header";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

import "./App.css";

function LayoutContext() {
  const [currentContext, setContext] = useState(0);
  const [notifArea, setNotifArea] = useState({ id: 0 });
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header
        currentContext={currentContext}
        cartItems={cartItems}
        notifArea={notifArea}
      />
      <Outlet context={{ cartItems, setNotifArea }} />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <LayoutContext />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
