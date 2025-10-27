import "./header.css";

export default function Header({ cartItems }) {
  const cartNumberClassName = `cartNumber ${cartItems.length ? "" : "empty"}`;
  console.log(cartNumberClassName);

  return (
    <nav className="mainNav">
      <h1>ShopDigi</h1>
      <ol>
        <li>Home</li>
        <li>Shop</li>
        <li>
          Cart <span className={cartNumberClassName}>{cartItems.length}</span>
        </li>
      </ol>
    </nav>
  );
}
