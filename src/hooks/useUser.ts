import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function useUser() {
  const { user, signIn, logout } = useContext(UserContext);

  return {
    user,
    signIn,
    logout,
  };
}
