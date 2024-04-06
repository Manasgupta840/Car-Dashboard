import classNames from "classnames";
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from "react";

const Input = ({
  leftIcon,
  inputProps,
  containerClass,
}: {
  leftIcon: ReactNode;
  containerClass?: string;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}) => {
  const containerClassName = classNames(
    containerClass,
    "bg-[#DCDBDB] flex gap-2 pl-4 rounded-md"
  );
  const inputClassName = classNames(
    inputProps.className,
    "border-none outline-none "
  );
  return (
    <div className={containerClassName}>
      {leftIcon}
      <input {...inputProps} className={inputClassName} />
    </div>
  );
};

export default Input;
