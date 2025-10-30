import { useEffect } from "react";
import { useOutletContext, Link } from "react-router";

import "./home.css";

export default function Home() {
  const { setPageContext, setNotifArea } = useOutletContext();

  useEffect(() => {
    setNotifArea(0);
  });

  const onPageChange = (ctx) => {
    return () => setPageContext(ctx);
  };

  return (
    <section className="homeSection">
      <div className="slogan">
        <h2>
          Everything from Everywhere.
          <br />
          All at your fingertips.
        </h2>
        <div className="navItem navShop" onClick={onPageChange("shop")}>
          <Link to="/shop" className="navContainer flexAlignEnd">
            <span className="navContent animated">Shop Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
