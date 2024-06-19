import React from "react";

const TogglerButton = () => (
  <button
    className="toggler-button mt-2"
    aria-expanded="false"
    aria-controls="navbarLinks"
    type="button"
  >
    <span className="icon-bars"></span>
  </button>
);

export default TogglerButton;
