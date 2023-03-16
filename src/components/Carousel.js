import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Carousel = ({ children }) => {
  const [active, setActive] = useState(4);
  const count = children.length;
  const MAX_VISIBILITY = 3;

  return (
    <div className="carousel-container">
      <div className="carousel">
        {active > 0 && (
          <button className="nav left" onClick={() => setActive((i) => i - 1)}>
            <Icon icon="material-symbols:arrow-circle-left" />
          </button>
        )}
        {children.map((child, i) => (
          <div
            className="card-container"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
            key={i}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => setActive((i) => i + 1)}>
            <Icon icon="material-symbols:arrow-circle-right" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
