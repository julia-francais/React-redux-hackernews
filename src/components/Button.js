import React from "react";

const ButtonInline = ({ onClick, type = "button", children }) => (
  <Button type={type} className="button-inline" onClick={onClick}>
    {children}
  </Button>
);

const Button = ({ onClick, type = "button", className, children }) => (
  <button type={type} className="className" onClick={onClick}>
    {children}
  </button>
);

export { Button, ButtonInline };
