import { useOutletContext } from "react-router";

export default function Cart() {
  const { cartItems } = useOutletContext();
  console.log(cartItems);

  return <>Cart {cartItems?.length}</>;
}
