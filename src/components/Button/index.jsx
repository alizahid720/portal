import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[21px]" };
const variants = {
  fill: {
    light_green_A700: "bg-light_green-A700 text-white-A700",
    indigo_900: "bg-indigo-900 text-white-A700",
    white_A700: "bg-white-A700 text-indigo-900",
    light_blue_500: "bg-light_blue-500 text-white-A700",
  },
  outline: {
    indigo_900: "outline outline-[0.5px] outline-indigo-900 text-indigo-900",
  },
};
const sizes = { xs: "p-[11px]", sm: "pl-[13px] pr-3 py-3.5", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "outline",
  color = "indigo_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_green_A700",
    "indigo_900",
    "white_A700",
    "light_blue_500",
  ]),
};

export { Button };
