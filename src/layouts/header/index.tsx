import logoUnycos from "../../assets/images/logo-unycos.png";
import styles from "./Header.module.css";
import useUser from "../../hooks/useUser";
import arrow from "../../assets/images/arrow.png";
import { useState } from "react";
import Dropdown from "./dropdown";
import Menu from "../menu";
import useDynamicWidth from "../../hooks/useDynamicWidth";

export default function Header() {
  const { user, signIn } = useUser();
  const { dynamicWidth } = useDynamicWidth();
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
          <li onClick={signIn}>REGISTER</li>
          <li onClick={signIn} className={styles.noRight}>
            LOG IN
          </li>
        </>
      );
    }
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <div
            className={styles.logo}
            style={{
              marginLeft:
                dynamicWidth < 768 ? "35px" : user.name ? "170px" : "205px",
            }}
          >
            <a href="https://unycos.com" target="_blank">
              <img src={logoUnycos} alt="logo-unycos" />
            </a>
          </div>
          <ul className={styles.navbarItems}>
            <li>CURSOS</li>
            <NavbarItems />
          </ul>
          <Menu />
        </header>
      </div>
      {dynamicWidth > 768 ? (
        <Dropdown dropdown={dropdown} setDropdown={setDropdown} />
      ) : (
        <></>
      )}
    </>
  );
}
