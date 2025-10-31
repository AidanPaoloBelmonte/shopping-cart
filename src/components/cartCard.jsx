export default function CartCard({
  id,
  title,
  price,
  amount,
  image,
  onAddAmount,
  onSubtractAmount,
}) {
  if (id === undefined) {
    return;
  }

  return (
    <div className="cartCard" item-id={id}>
      <div className="imageContainer">
        <img className="cartImage" src={image} />
      </div>
      <p className="cartTitle">{title}</p>
      <p className="cartPrice">{`$${price}`}</p>
      <div className="overflowContainer">
        <div className="amountDetails">
          <button
            className="amountControl add"
            type="button"
            onClick={onAddAmount(id)}
          >
            +
          </button>
          <p className="cartAmount">{`x${amount}`}</p>
          <button
            className="amountControl minus"
            type="button"
            onClick={onSubtractAmount(id)}
          >
            -
          </button>
        </div>
      </div>
      <p className="cartSubTotal">{`$${(price * amount ? price * amount : 0).toFixed(2)}`}</p>
    </div>
  );
}
