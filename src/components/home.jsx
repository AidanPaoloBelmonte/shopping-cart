import { useEffect } from "react";
import { useOutletContext } from "react-router";

export default function Home() {
  const { setNotifArea } = useOutletContext();

  useEffect(() => {
    setNotifArea(0);
  });

  return <>Home</>;
}
