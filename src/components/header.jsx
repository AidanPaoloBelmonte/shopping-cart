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
            <div className="navContainer centerAligned">
              <Link to="home" className="navContent animated">
                Home
              </Link>
            </div>
          </li>
          <li className="navShop" onClick={onPageChange("shop")}>
            <div className="navContainer centerAligned">
              <Link to="shop" className="navContent animated">
                Shop
              </Link>
            </div>
          </li>
          <li className="navCart" onClick={onPageChange("cart")}>
            <div className="navContainer centerAligned">
              <Link to="cart" className="navContent centerAligned">
                <span>Cart</span>
                <span className={cartNumberClassName}>{cartNumberDisplay}</span>
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      {notifAreaDisplay}
    </section>
  );
}
