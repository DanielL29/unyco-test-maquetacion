import { createContext, ReactNode, useState } from "react";

interface UserProps {
  name: string;
}

interface IUserContext {
  user: UserProps;
  signIn: () => void;
  logout: () => void;
}

interface Props {
  children: ReactNode;
}

const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  if (user.name === undefined && localStorage.getItem("localUser") !== null) {
    const localUser: UserProps = JSON.parse(localStorage.getItem("localUser")!);

    setUser(localUser);
  }

  function signIn(): void {
    const name = prompt("Cual es tu nombre ?")?.toUpperCase();

    if (name) {
      setUser({ name });
      localStorage.setItem("localUser", JSON.stringify({ name }));
    }
  }

  function logout(): void {
    setUser({} as UserProps);
    localStorage.removeItem("localUser");
  }

  return (
    <UserContext.Provider value={{ user, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
