import { SyntheticEvent, useEffect, useState } from "react";

import Button from "../../../components/button";
import Title from "../../../components/title";

import styles from "./MoreInformation.module.css";

import useCountries from "../../../hooks/api/useCountries";
import useWhatsapp from "../../../hooks/api/useWhatsapp";
import useDynamicWidth from "../../../hooks/useDynamicWidth";
import InfoInput from "./InfoInput";
import InfoSelect from "./InfoSelect";
import InfoCheckbox from "./InfoCheckbox";

export interface UserInfo {
  name: string;
  email: string;
  country: string;
  phone: string;
  acceptCondition: boolean;
  moreInformation: boolean;
}

export default function MoreInformation() {
  const { countries } = useCountries();
  const { dynamicWidth } = useDynamicWidth();
  const { sendUserInfo } = useWhatsapp();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    country: "",
    phone: "",
    acceptCondition: false,
    moreInformation: false,
  });

  function changeUserInfo(e: SyntheticEvent) {
    const event = e.target as HTMLInputElement;

    if (event.checked) {
      return setUserInfo({ ...userInfo, [event.name]: true });
    } else if (
      (!event.checked && event.name === "moreInformation") ||
      (!event.checked && event.name === "acceptCondition")
    ) {
      return setUserInfo({ ...userInfo, [event.name]: false });
    }

    return setUserInfo({ ...userInfo, [event.name]: event.value });
  }

  function submitUserInfo(e: SyntheticEvent) {
    e.preventDefault();

    sendUserInfo(userInfo);
  }

  return (
    <div className={styles.moreInformation}>
      <Title
        text="OBTÉN MÁS INFORMACiÓN"
        marginBottom={dynamicWidth < 768 ? 18 : 32}
      />
      <form onSubmit={submitUserInfo}>
        <InfoInput
          name="name"
          placeholder="Nombre completo"
          userInfo={userInfo}
          onChange={changeUserInfo}
        />
        <InfoInput
          name="email"
          placeholder="Correo electrónico"
          userInfo={userInfo}
          onChange={changeUserInfo}
        />
        <InfoSelect userInfo={userInfo} onChange={changeUserInfo}>
          {countries
            ?.sort((a, b) => (a.translations.es > b.translations.es ? 1 : -1))
            .map((country) => (
              <option key={country.numericCode} value={country.callingCodes[0]}>
                {`${country.alpha2Code} - ${country.translations.es} - ${country.callingCodes[0]}`}
              </option>
            ))}
        </InfoSelect>
        <InfoInput
          name="phone"
          placeholder="TeLéfono"
          userInfo={userInfo}
          onChange={changeUserInfo}
        />
        <div className={styles.checks}>
          <InfoCheckbox name="acceptCondition" onChange={changeUserInfo}>
            Acepto las <span>condiciones de uso</span> y{" "}
            <span>protección de datos.</span>
          </InfoCheckbox>
          <InfoCheckbox name="moreInformation" onChange={changeUserInfo}>
            Me gustaría recibir información sobre nuevos cursos, ofertas y
            promociones
          </InfoCheckbox>
        </div>
        <Button
          children="enviar"
          marginTop={dynamicWidth < 768 ? 0 : 21}
          marginBottom={40}
          type="submit"
        />
      </form>
    </div>
  );
}
