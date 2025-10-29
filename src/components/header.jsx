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
          <li className="navHome" onClick={onPageChange("home")}>
            <Link to="home" className="navContainer centerAligned">
              <a className="navContent animated">Home</a>
            </Link>
          </li>
          <li className="navShop" onClick={onPageChange("shop")}>
            <Link to="shop" className="navContainer centerAligned">
              <a to="shop" className="navContent animated">
                Shop
              </a>
            </Link>
          </li>
          <li className="navCart" onClick={onPageChange("cart")}>
            <Link to="cart" className="navContainer centerAligned">
              <a className="navContent centerAligned">
                <span>Cart</span>
                <span className={cartNumberClassName}>{cartNumberDisplay}</span>
              </a>
            </Link>
          </li>
        </ol>
      </nav>
      {notifAreaDisplay}
    </section>
  );
}
