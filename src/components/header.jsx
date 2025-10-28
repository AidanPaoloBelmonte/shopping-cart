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
            <button className="navContent animated">Home</button>
          </div>
        </li>
        <li className="navShop">
          <div className="navContainer centerAligned">
            <button className="navContent animated">Shop</button>
          </div>
        </li>
        <li className="navCart">
          <div className="navContainer centerAligned">
            <button className="navContent">
              Cart
              <span className={cartNumberClassName}>{cartNumberDisplay}</span>
            </button>
          </div>
        </li>
      </ol>
    </nav>
  );
}
