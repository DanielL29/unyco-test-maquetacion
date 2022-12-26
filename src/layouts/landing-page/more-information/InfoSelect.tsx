import { ReactNode, SyntheticEvent } from "react";
import { UserInfo } from ".";

interface IInfoSelectProps {
  userInfo: UserInfo;
  children: ReactNode;
  onChange: (e: SyntheticEvent) => void;
}

export default function InfoSelect({
  userInfo,
  onChange = () => 0,
  children,
}: IInfoSelectProps) {
  return (
    <select
      value={userInfo.country}
      name="country"
      onChange={onChange}
      required
    >
      <option value="" disabled>
        País / Código país
      </option>
      {children}
    </select>
  );
}
