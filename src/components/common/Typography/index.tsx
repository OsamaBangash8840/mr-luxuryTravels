import React, { ElementType } from "react";
import clsx from "clsx";

type Weight = "regular" | "medium" | "semibold" | "bold";
type Color = "primary" | "secondary" | "white" | "black";
type Variant =
  | "h1Heading"
  | "h2Heading"
  | "largePara"
  | "mainBodyPara"
  | "navLink"
  | "destinationTitle"
;

interface ITypography {
  variant?: Variant;
  weight?: Weight;
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  color?: Color;
  onClick?: () => void;
}

const tags: Record<Variant, ElementType> = {
 h1Heading:"h1",
 h2Heading:"h2",
 destinationTitle:"h3",
 largePara:"p",
 mainBodyPara:"p",
 navLink:"a",
};

const sizes: Record<Variant, string> = {
  h1Heading: "text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] xl:text-[110px] xl:leading-[110px] 2xl:text-[190px] 2xl:leading-[180px] font-heading font-medium",
  h2Heading: "text-[30px] leading-[40px] xl:text-[60px] xl:leading-[70px] 2xl:text-[90px] 2xl:leading-[100px] font-heading font-medium",
  destinationTitle: "text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] xl:text-[36px] xl:leading-[44px] font-heading font-medium",
  largePara: "text-[19px] 2xl:text-[27px] 2xl:leading-[48px] font-heading",
  mainBodyPara: "text-[13px] leading-[18px] sm:text-[14px] sm:leading-[20px] md:text-[15px] md:leading-[22px] 2xl:text-[18px] xl:leading-[28px] font-body",
  navLink:"text-[15px] text-textPrimary font-body",

};

const weights: Record<Weight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};
const colors: Record<Color, string> = {
  primary: "text-textPrimary",
  secondary: "text-textSecondary",
  white: "text-white",
  black: "text-black",
};

export const Typography = ({
  variant = "mainBodyPara",
  weight = "regular",
  color = "primary",
  children,
  as,
  className,
  onClick,
}: ITypography) => {
  const Tag = as ?? tags[variant];
  return (
    <Tag
      onClick={onClick}
      className={clsx(
        sizes[variant],
        weights[weight],
        colors[color],
        className
      )}
    >
      {children}
    </Tag>
  );
};
