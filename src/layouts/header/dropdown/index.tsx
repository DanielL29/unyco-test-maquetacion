import styles from "./Dropdown.module.css";
import useUser from "../../../hooks/useUser";

interface IDropdownProps {
  dropdown: boolean;
  setDropdown: (toggle: boolean) => void;
}

export default function Dropdown({ dropdown, setDropdown }: IDropdownProps) {
  const { logout } = useUser();

  function finishSession() {
    logout();
    setDropdown(false);
  }

  return (
    <ul className={dropdown ? styles.showOptions : styles.hideOptions}>
      <li>PANEL DE CONTROL</li>
      <li>TUS CURSOS</li>
      <li>PERFIL</li>
      <li>CUENTA</li>
      <li className={styles.logout} onClick={finishSession}>
        CERRAR SESÍON
      </li>
    </ul>
  );
}
