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

  const cartCards = cartItems.map((item) => {
    return (
      <CartCard
        key={item.id}
        onAddAmount={onAddAmount}
        onSubtractAmount={onSubtractAmount}
        {...item}
      ></CartCard>
    );
  });

  return (
    <section className="baseSection cartSection">
      <div className="cartDisplay">{cartCards}</div>
    </section>
  );
}
