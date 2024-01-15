import React from "react";

const sizeClasses = {
  txtLatoSemiBold20Gray600: "font-lato font-semibold",
  txtLatoSemiBold14: "font-lato font-semibold",
  txtLatoSemiBold14WhiteA700: "font-lato font-semibold",
  txtGilroySemiBold22: "font-gilroy font-semibold",
  txtLatoSemiBold20: "font-lato font-semibold",
  txtInterRegular10: "font-inter font-normal",
  txtInterBold48: "font-bold font-inter",
  txtLatoRegular16: "font-lato font-normal",
  txtInterMedium10: "font-inter font-medium",
  txtInterBold10: "font-bold font-inter",
  txtLatoBlack32: "font-black font-lato",
  txtLatoBold22: "font-bold font-lato",
  txtLatoSemiBold16: "font-lato font-semibold",
  txtLatoBlack48: "font-black font-lato",
  txtLatoMedium18: "font-lato font-medium",
  txtPassionOneRegular22: "font-normal font-passionone",
  txtPassionOneBold16: "font-bold font-passionone",
  txtLatoMedium14: "font-lato font-medium",
  txtInterSemiBold10: "font-inter font-semibold",
  txtInterSemiBold8: "font-inter font-semibold",
  txtInterMedium10Gray900: "font-inter font-medium",
  txtPassionOneBold45: "font-bold font-passionone",
  txtPassionOneBold22: "font-bold font-passionone",
  txtLatoMedium12: "font-lato font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
