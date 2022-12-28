import { SyntheticEvent } from "react";
import { UserInfo } from ".";

interface IInfoInputProps {
  placeholder: string;
  name: string;
  userInfo: UserInfo;
  onChange: (e: SyntheticEvent) => void;
}

type UserInfoInputKeys = keyof Omit<
  UserInfo,
  "acceptCondition" | "moreInformation"
>;

export default function InfoInput({
  name,
  placeholder,
  userInfo,
  onChange = () => 0,
}: IInfoInputProps) {
  function validatePhoneNumber(e: SyntheticEvent) {
    const event = e.target as HTMLInputElement;

    event.setCustomValidity("");

    if (event.type === "tel" && !event.validity.valid) {
      return event.setCustomValidity(
        "O número de telefone deve precisa estar no formato: 018997157418"
      );
    }
  }

  function clearValidity(e: SyntheticEvent) {
    const event = e.target as HTMLInputElement;

    return event.setCustomValidity("");
  }

  return (
    <input
      type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
      placeholder={placeholder}
      value={userInfo[name as UserInfoInputKeys]}
      name={name}
      onChange={onChange}
      onInvalid={validatePhoneNumber}
      onInput={clearValidity}
      maxLength={name === "phone" ? 12 : undefined}
      minLength={name === "phone" ? 12 : undefined}
      pattern={name === "phone" ? "[0-9]{12}" : undefined}
      required
    />
  );
}
