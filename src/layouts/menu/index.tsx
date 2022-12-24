import useUser from "../../hooks/useUser";
import avatar from "../../assets/images/avatar.png";
import toggleIcon from "../../assets/images/toggle.png";
import bell from "../../assets/images/bell.png";
import disableBell from "../../assets/images/disable-bell.png";
import darkLogoUnycos from "../../assets/images/dark-logo-unycos.png";
import whatsappLogo from "../../assets/images/whatsapp-logo.png";

import styles from "./Menu.module.css";

import { useState } from "react";

export default function Menu() {
  const { user, signIn, logout } = useUser();
  const [notification, setNotification] = useState(false);
  const [toggle, setToggle] = useState(false);
  const isActive = toggle ? styles.active : "";

  function MenuIcon() {
    if (user.name) {
      return (
        <img
          src={toggleIcon}
          alt="toggle-icon"
          onClick={() => setToggle(true)}
        />
      );
    } else {
      return <img src={avatar} alt="avatar" onClick={() => setToggle(true)} />;
    }
  }

  function UserWelcome() {
    if (user.name) {
      return (
        <div className={styles.welcome}>
          <h1>
            HOLA, <span>{user.name}</span>
          </h1>
          {notification ? (
            <img
              className={styles.bell}
              src={bell}
              alt="bell"
              onClick={() => setNotification(false)}
            />
          ) : (
            <img
              src={disableBell}
              alt="disable-bell"
              onClick={() => setNotification(true)}
            />
          )}
        </div>
      );
    } else {
      return <></>;
    }
  }

  function MenuItems() {
    if (user.name) {
      return (
        <>
          <li>PANEL DE CONTROL</li>
          <li>MIS CURSOS</li>
          <li>PERFIL</li>
          <li>AJUSTES</li>
          <li className={styles.last}>TODOS LOS CURSOS</li>
        </>
      );
    } else {
      return (
        <>
          <li>CURSOS</li>
          <li>REGISTER</li>
          <li className={styles.last} onClick={signIn}>
            LOG IN
          </li>
        </>
      );
    }
  }

  return (
    <div className={styles.sidebarMenu}>
      <MenuIcon />
      <div
        className={`${styles.blackBackground} ${isActive}`}
        onClick={() => setToggle(false)}
      ></div>
      <div className={`${styles.menu} ${isActive}`}>
        <img src={darkLogoUnycos} alt="dark-logo-unycos" />
        <UserWelcome />
        <ul className={styles.menuItems}>
          <MenuItems />
        </ul>
        <div className={styles.contact}>
          <h2>CONTÁCTANOS POR WHATSAPP</h2>
          <div>
            <img src={whatsappLogo} alt="whatsapp-logo" />
            <h3>+34 653 46 73 60</h3>
          </div>
          {user.name ? <h4 onClick={logout}>CERRAR SESSIÓN</h4> : <></>}
        </div>
      </div>
    </div>
  );
}
