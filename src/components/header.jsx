import { Link } from "react-router";

import NotifArea from "./notif-area";

import "./header.css";

export default function Header({
  pageContext,
  setPageContext,
  cartItems,
  notifArea,
  searchQuery,
  setSearchQuery,
}) {
  const onPageChange = (ctx) => {
    return () => setPageContext(ctx);
  };

  const onSearchType = (e) => {
    setSearchQuery(e.target.value ? e.target.value : "");
  };

  const cartNumberClassName = `cartNumber centerAligned ${cartItems.length ? "" : "empty"}`;
  const cartNumberDisplay = Math.ceil(
    Math.floor(
      cartItems.reduce((total, item) => {
        return cartItems.length ? total + item.amount : 0;
      }, 0),
      99,
    ),
    0,
  );

  const notifAreaDisplay = (
    <NotifArea
      id={notifArea}
      value={searchQuery}
      onChange={onSearchType}
    ></NotifArea>
  );

  return (
    <section className="headerSection">
      <nav className={`mainNav ${pageContext}`}>
        <h1>ShopDigi</h1>
        <ol>
          <li className="navItem navHome" onClick={onPageChange("home")}>
            <Link
              to="home"
              className="navContainer centerAligned"
              viewTransition
            >
              <span className="navContent animated">Home</span>
            </Link>
          </li>
          <li className="navItem navShop" onClick={onPageChange("shop")}>
            <Link
              to="shop"
              className="navContainer centerAligned"
              viewTransition
            >
              <span to="shop" className="navContent animated">
                Shop
              </span>
            </Link>
          </li>
          <li className="navItem navCart">
            <Link
              to="cart"
              className="navContainer centerAligned"
              onClick={onPageChange("cart")}
              viewTransition
            >
              <span className="navContent centerAligned">
                <span>Cart</span>
                <span className={cartNumberClassName}>{cartNumberDisplay}</span>
              </span>
            </Link>
          </li>
        </ol>
      </nav>
      {notifAreaDisplay}
    </section>
  );
}
