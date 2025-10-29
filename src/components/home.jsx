import { useEffect } from "react";
import { useOutletContext } from "react-router";

import "./home.css";

export default function Home() {
  const { setNotifArea } = useOutletContext();

  useEffect(() => {
    setNotifArea(0);
  });

  return (
    <section className="homeSection">
      <div className="imageCarousel">
        <div className="window"></div>
        <div className="about">
          <h2>New Summer Sale!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            autem ullam quos dicta. Quos quis, odio in atque commodi asperiores
            delectus aliquid soluta iusto distinctio modi laboriosam eos dolorum
            sint!
          </p>
        </div>
      </div>
    </section>
  );
}
