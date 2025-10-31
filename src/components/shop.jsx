import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";

import ShopCard from "./shopCard";

import "./shop.css";

export default function Shop() {
  const { cartItems, searchQuery, setNotifArea, setCartItems } =
    useOutletContext();
  const [isReady, setReady] = useState(false);
  const [products, setProducts] = useState({});

  const test = cartItems.filter((item) => item.title.includes("Mens"));

  const onAddCart = (id, title, price, image) => {
    return () => {
      let containsItem = false;
      const items = [...cartItems];
      items.forEach((item) => {
        if (item.id !== id) return;
        containsItem = true;
        item.amount++;

        setCartItems(items);
        return;
      });

      if (!containsItem) {
        const newItem = {
          id: id,
          title: title,
          price: price,
          image: image,
          amount: 1,
        };

        if (!cartItems) {
          items.length = 0;
        }

        items.push(newItem);

        setCartItems([...items]);
      }
    };
  };

  useEffect(() => {
    setNotifArea(1);

    const rawData = fetch("https://fakestoreapi.com/products");
    rawData
      .then((res) => res.json())
      .then((res) => {
        setReady(true);
        setProducts(res);
      });
  }, [setNotifArea]);

  if (!isReady) {
    return (
      <section className="baseSection shopSection">
        <div className="loadingDisplay">
          <h2>Preparing Shop Items...</h2>
        </div>
      </section>
    );
  }

  const shopCards = !searchQuery
    ? products.map((product) => {
        return (
          <ShopCard
            key={product.id}
            onAddCart={onAddCart}
            {...product}
          ></ShopCard>
        );
      })
    : products
        .filter(
          (product) =>
            searchQuery &&
            product.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((product) => {
          return (
            <ShopCard
              key={product.id}
              onAddCart={onAddCart}
              {...product}
            ></ShopCard>
          );
        });

  console.log(shopCards);

  if (!shopCards.length) {
    return (
      <section className="baseSection shopSection">
        <div className="emptyWarningDisplay">
          <h2>No items matched your query!</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="baseSection">
      <div className="shopDisplay">{shopCards}</div>
    </section>
  );
}
