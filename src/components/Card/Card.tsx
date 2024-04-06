import classNames from "classnames";
import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const cardClassName = classNames(
    "w-fit h-fit p-2 bg-white rounded-3xl drop-shadow-lg",
    className
  );
  return <div className={cardClassName}>{children}</div>;
};

export default Card;
