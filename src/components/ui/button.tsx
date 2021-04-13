import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({
  customClass,
  cta,
  click,
  linkTo,
}: {
  customClass: string;
  cta: string;
  click: () => void;
  linkTo: string;
}): JSX.Element => (
  <div className="button-component">
    {!!linkTo && (
      <Link to={linkTo}>
        <button className={customClass} type="button" onClick={click}>
          {cta}
        </button>
      </Link>
    )}
    {!linkTo && (
      <button className={customClass} type="button" onClick={click}>
        {cta}
      </button>
    )}
  </div>
);

export default Button;
