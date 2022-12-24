import logoUnycos from "../../assets/images/logo-unycos.png";
import styles from "./Header.module.css";
import useUser from "../../hooks/useUser";
import arrow from "../../assets/images/arrow.png";
import { useState } from "react";
import Dropdown from "../../components/dropdown";
import Menu from "../menu";

export default function Header() {
  const { user, signIn } = useUser();
  const [dropdown, setDropdown] = useState(false);

  function NavbarItems() {
    if (user.name) {
      return (
        <ul onClick={() => setDropdown(!dropdown)}>
          <div className={styles.welcome}>
            <li className={styles.noRight}>
              HOLA,
              <span className={styles.username}> {user.name}</span>
            </li>
            <img src={arrow} alt="arrow" className={styles.arrow} />
          </div>
        </ul>
      );
    } else {
      return (
        <>
          <li>REGISTER</li>
          <li onClick={signIn} className={styles.noRight}>
            LOG IN
          </li>
        </>
      );
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div></div>
        <div className={styles.logo}>
          <img src={logoUnycos} alt="logo-unycos" />
        </div>
        <ul className={styles.navbarItems}>
          <li>CURSOS</li>
          <NavbarItems />
        </ul>
        <Menu />
      </header>
      <Dropdown dropdown={dropdown} setDropdown={setDropdown} />
    </>
  );
}