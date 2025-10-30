export default function ShopCard({ title, price, image }) {
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
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
