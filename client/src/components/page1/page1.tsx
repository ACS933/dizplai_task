import { InputHTMLAttributes, FC } from "react";

import "./page1.css";

type FromInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const Page1: FC<FromInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input {...otherProps} />
      {label && <div className="page1-label">{label}</div>}
    </div>
  );
};

export default Page1;
