import { useOutletContext } from "react-router";

export default function Home() {
  const { setNotifArea } = useOutletContext();
  setNotifArea(0);

  return <>Home</>;
}
