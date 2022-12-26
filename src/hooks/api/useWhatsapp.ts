import { sendInformation } from "../../services/whatsapp";

export default function useWhatsapp() {
  return {
    sendUserInfo: sendInformation,
  };
}
