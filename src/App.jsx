import { useState } from "react";
import {
  RouterProvider,
  Outlet,
  createBrowserRouter,
  useLocation,
} from "react-router";

import Header from "./components/header";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

import "./App.css";

function LayoutContext() {
  const [pageContext, setPageContext] = useState(
    useLocation().pathname.replace("/", ""),
  );
  const [notifArea, setNotifArea] = useState({ id: 0 });
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header
        pageContext={pageContext}
        setPageContext={setPageContext}
        cartItems={cartItems}
        notifArea={notifArea}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Outlet
        context={{
          cartItems,
          searchQuery,
          setPageContext,
          setNotifArea,
          setCartItems,
        }}
      />
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
