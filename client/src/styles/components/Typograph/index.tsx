import React from "react";
export interface iBaseTypographProps {
  className?: string;
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  fontWeight?: number;
  fontColor?: string;
  fontSize:
    | "Heading-1-700"
    | "Heading-2-600"
    | "Heading-3-600"
    | "Heading-3-500"
    | "Heading-4-600"
    | "Heading-4-500"
    | "Heading-5-600"
    | "Heading-5-500"
    | "Heading-6-600"
    | "Heading-6-500"
    | "Heading-7-600"
    | "Heading-7-500"
    | "body-1-400"
    | "body-1-600"
    | "body-2-400"
    | "body-2-500"
    | "button-big-text"
    | "button-medium-text"
    | "input-placeholder"
    | "input-label";
}

const Typograph = ({ className, children, tag }: iBaseTypographProps) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "h5" && <h5 className={className}>{children}</h5>}
      {tag === "h6" && <h6 className={className}>{children}</h6>}
      {tag === "p" && <p className={className}>{children}</p>}
    </>
  );
};
export default Typograph;
