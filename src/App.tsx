import { UserProvider } from "./contexts/UserContext";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import LandingPage from "./pages/landing-page";

export default function App() {
  return (
    <UserProvider>
      <Header />
      <LandingPage />
      <Footer />
    </UserProvider>
  );
}
