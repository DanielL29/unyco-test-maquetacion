import { whatsappInstanceApi } from "./api";
import { UserInfo } from "../layouts/landing-page/more-information";

export function sendInformation(userInfo: UserInfo) {
  const encodedText = `NOMBRE COMPLETO: ${userInfo.name}\nCORREO ELETRÓNICO: ${
    userInfo.email
  }\nTELÉFONO: +${userInfo.country} ${
    userInfo.phone
  }\nRECIBIR MÁS INFORMACIÓN: ${userInfo.moreInformation ? "SÍ" : "NO"}`;

  const moreInformation = `${whatsappInstanceApi}/5518997157418?text=${encodeURIComponent(
    encodedText
  )}`;

  window.open(moreInformation);
}
