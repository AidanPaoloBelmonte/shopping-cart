import { useEffect } from "react";
import { useOutletContext } from "react-router";

export default function Shop() {
  const { setNotifArea } = useOutletContext();

  useEffect(() => {
    setNotifArea(1);
  });

  return <>Shop</>;
}
