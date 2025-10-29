import { useOutletContext } from "react-router";

export default function Shop() {
  const { setNotifArea } = useOutletContext();
  setNotifArea(1);

  return <>Shop</>;
}
