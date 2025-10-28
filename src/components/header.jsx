import { Link } from "react-router";

import "./header.css";

export default function Header({ currentContext, cartItems }) {
  const cartNumberClassName = `cartNumber centerAligned ${cartItems.length ? "" : "empty"}`;
  const cartNumberDisplay = Math.ceil(Math.floor(cartItems.length, 99), 0);

  return (
    <nav className="mainNav">
      <h1>ShopDigi</h1>
      <ol>
        <li className="navHome">
          <div className="navContainer centerAligned">
            <Link to="home" className="navContent animated">
              Home
            </Link>
          </div>
        </li>
        <li className="navShop">
          <div className="navContainer centerAligned">
            <Link to="shop" className="navContent animated">
              Shop
            </Link>
          </div>
        </li>
        <li className="navCart">
          <div className="navContainer centerAligned">
            <Link to="cart" className="navContent centerAligned">
              <span>Cart</span>
              <span className={cartNumberClassName}>{cartNumberDisplay}</span>
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
