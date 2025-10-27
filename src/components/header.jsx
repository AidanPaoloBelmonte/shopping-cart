import "./header.css";

export default function Header({ currentContext, cartItems }) {
  const cartNumberClassName = `cartNumber centerAligned ${cartItems.length ? "" : "empty"}`;
  const cartNumberDisplay = Math.ceil(Math.floor(cartItems.length, 99), 0);

  return (
    <nav className="mainNav">
      <h1>ShopDigi</h1>
      <ol>
        <li className="navHome centerAligned">
          <button className="navContent animated">Home</button>
        </li>
        <li className="navShop centerAligned">
          <button className="navContent animated">Shop</button>
        </li>
        <li className="navCart centerAligned">
          <button className="navContent">
            Cart
            <span className={cartNumberClassName}>{cartNumberDisplay}</span>
          </button>
        </li>
      </ol>
    </nav>
  );
}
