import classNames from "classnames";
import { ReactNode } from "react";
import Card from "../Card/Card";

const ConnectedCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const connectedCardClassName = classNames(
    "!w-[5.375rem] !h-[4.625rem] grid gap-2 justify-items-center justify-center content-center rounded-xl px-4 items-center drop-shadow-none ",
    className
  );
  return <Card className={connectedCardClassName}>{children}</Card>;
};

export default ConnectedCard;