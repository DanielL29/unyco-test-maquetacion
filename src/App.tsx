import { UserProvider } from "./contexts/UserContext";
import Header from "./layouts/header";

export default function App() {
  return (
    <UserProvider>
      <Header />
    </UserProvider>
  );
}
