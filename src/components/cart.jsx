import { useOutletContext } from "react-router";

import CartCard from "./cartCard";

import "./cart.css";

export default function Cart() {
  const { cartItems, setCartItems } = useOutletContext();

  const onAddAmount = (id) => {
    return () => {
      const items = [...cartItems];
      let containsItem = false;
      items.forEach((item) => {
        if (item.id !== id) return;
        containsItem = true;
        item.amount++;

        return;
      });

      if (containsItem) setCartItems(items);
    };
  };

  const onSubtractAmount = (id) => {
    return () => {
      const items = [...cartItems];
      let containsItem = false;
      items.forEach((item) => {
        if (item.id !== id) return;
        containsItem = true;
        item.amount--;
        console.log(item.amount);

        return;
      });

      if (containsItem) {
        const newItems = items.filter((item) => item.amount);
        setCartItems(newItems);
      }
    };
  };

  let itemsTotal = 0;
  let itemsPriceTotal = 0;
  const cartCards = cartItems.map((item) => {
    if (item.amount) {
      itemsTotal += item.amount;
      itemsPriceTotal += item.price * item.amount;
    }

    return (
      <CartCard
        key={item.id}
        onAddAmount={onAddAmount}
        onSubtractAmount={onSubtractAmount}
        {...item}
      ></CartCard>
    );
  });

  if (!itemsTotal) {
    return (
      <section className="baseSection cartSection">
        <div className="emptyWarningDisplay">
          <h2>Your cart is empty!</h2>
        </div>
      </section>
    );
  }

  const shippingCost = itemsTotal * 0.25;
  const tax = itemsPriceTotal * 0.12;
  const finalTotal = itemsPriceTotal + shippingCost + tax;

  return (
    <section className="baseSection cartSection">
      <div className="cartDisplay">{cartCards}</div>
      <div className="checkoutPanel">
        <div className="summaryTitle">
          <h2>Summary</h2>
        </div>
        <div className="summary">
          <span className="itemsTotal">
            <span>Items</span>
            <span className="totalDisplay">{`x${itemsTotal}`}</span>
          </span>
          <span className="summaryValue">{`$${itemsPriceTotal.toFixed(2)}`}</span>
          <span>Shipping</span>
          <span className="summaryValue">{`$${shippingCost.toFixed(2)}`}</span>
          <span>Tax</span>
          <span className="summaryValue">{`$${tax.toFixed(2)}`}</span>
        </div>
        <div className="priceTotal">
          <span>Total</span>
          <span className="priceTotalDisplay">{`$${finalTotal.toFixed(2)}`}</span>
        </div>
      </div>
    </section>
  );
}
