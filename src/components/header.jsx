import { useState } from "react";
import { Link } from "react-router";

import getNotifArea from "./notif-area";

import "./header.css";

export default function Header({
  pageContext,
  setPageContext,
  cartItems,
  notifArea,
}) {
  const onPageChange = (ctx) => {
    return () => setPageContext(ctx);
  };

  const cartNumberClassName = `cartNumber centerAligned ${cartItems.length ? "" : "empty"}`;
  const cartNumberDisplay = Math.ceil(Math.floor(cartItems.length, 99), 0);

  const notifAreaDisplay = getNotifArea(notifArea);

  return (
    <section className="headerSection">
      <nav className={`mainNav ${pageContext}`}>
        <h1>ShopDigi</h1>
        <ol>
          <li className="navItem navHome" onClick={onPageChange("home")}>
            <Link to="home" className="navContainer centerAligned">
              <span className="navContent animated">Home</span>
            </Link>
          </li>
          <li className="navItem navShop" onClick={onPageChange("shop")}>
            <Link to="shop" className="navContainer centerAligned">
              <span to="shop" className="navContent animated">
                Shop
              </span>
            </Link>
          </li>
          <li className="navItem navCart" onClick={onPageChange("cart")}>
            <Link to="cart" className="navContainer centerAligned">
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
