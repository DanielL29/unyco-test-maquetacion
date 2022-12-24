import { UserProvider } from "./contexts/UserContext";
import Header from "./layouts/header";
import LandingPage from "./pages/landing-page";

export default function App() {
  return (
    <UserProvider>
      <Header />
      <LandingPage />
    </UserProvider>
  );
}
