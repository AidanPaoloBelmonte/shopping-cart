export default function ShopCard({ id, title, price, image, onAddCart }) {
  const onClick = onAddCart(id, title, price, image);

  return (
    <div className="shopCard">
      <div className="imageContainer centerAligned">
        <img className="shopImage" src={image} />
      </div>
      <div className="details">
        <p>{title}</p>
      </div>
      <div className="buyPanel">
        <div className="overflowContainer">
          <p>{`$${price}`}</p>
          <button type="button" onClick={onClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
