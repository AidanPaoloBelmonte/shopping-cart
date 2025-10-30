import { useEffect } from "react";
import { useOutletContext } from "react-router";

import "./shop.css";

export default function Shop() {
  const { setNotifArea } = useOutletContext();

  useEffect(() => {
    setNotifArea(1);
  });

  return (
    <section className="baseSection shopSection">
      <div className="loadingDisplay">
        <h2>Preparing Shop Items...</h2>
      </div>
    </section>
  );
}
