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
  h1Heading: "text-[50px] leading-[50px] md:text-[70px] md:leading-[70px] xl:text-[120px] xl:leading-[120px] 2xl:text-[200px] 2xl:leading-[180px] font-heading font-medium",
  h2Heading: "text-[40px] leading-[40px] xl:text-[70px] xl:leading-[70px] 2xl:text-[100px] 2xl:leading-[100px] font-heading font-medium",
  destinationTitle: "text-[24px] leading-[28px] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[44px] font-heading font-medium",
  largePara: "text-[22px] 2xl:text-[30px] 2xl:leading-[48px] font-body",
  mainBodyPara: "text-[14px] leading-[20px] sm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[24px] 2xl:text-[20px] xl:leading-[30px] font-body",
  navLink:"text-[16px] text-textPrimary font-body",

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
}: ITypography) => {
  const Tag = as ?? tags[variant];
  return (
    <Tag
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
