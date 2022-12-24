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
  const fakeUser: UserProps = { name: "DANIEL" };

  if (user.name === undefined && localStorage.getItem("localUser") !== null) {
    setUser(fakeUser);
  }

  function signIn(): void {
    setUser(fakeUser);
    localStorage.setItem("localUser", JSON.stringify(fakeUser));
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
