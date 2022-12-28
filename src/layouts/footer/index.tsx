import Button from "../../components/button";
import Title from "../../components/title";

import styles from "./Footer.module.css";

import facebookIcon from "../../assets/images/facebook-outline.png";
import instagramIcon from "../../assets/images/instagram.png";
import twitterIcon from "../../assets/images/twitter-outline.png";
import youtubeIcon from "../../assets/images/youtube.png";
import logoUnycos from "../../assets/images/logo-unycos.png";
import footerBackground from "../../assets/images/footer-background.png";
import whatsappLogo from "../../assets/images/whatsapp-logo.png";

import useDynamicWidth from "../../hooks/useDynamicWidth";

export default function Footer() {
  const { dynamicWidth } = useDynamicWidth();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}>
        <img src={footerBackground} alt="footer-background" />
        <div className={styles.backgroundContent}>
          <Title
            text={
              dynamicWidth < 768
                ? "únete a la comunidad"
                : "APRENDE CON LOS MEJORES"
            }
            fontSize={dynamicWidth < 768 ? 16 : 32}
            marginBottom={dynamicWidth < 768 ? 8 : 38}
            marginTop={dynamicWidth < 768 ? 41 : 52}
          />
          <div>
            <Title
              text="Detrás de cada éxito, hay una história. conoce en nuestro blog."
              marginBottom={51}
              hidden={dynamicWidth < 768}
            />
          </div>
          <a href="https://unycos.com/blog" target="_blank">
            <Button
              children="leer más en nuestro blog"
              marginBottom={61}
              height={48}
              theme="transparent"
              hidden={dynamicWidth < 768}
            />
          </a>
        </div>
      </div>
      <div className={styles.footerInfos}>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/somosUnycos/" target="_blank">
            <img src={facebookIcon} alt="facebook-icon" />
          </a>
          <a href="https://www.instagram.com/unycos_com/" target="_blank">
            <img src={instagramIcon} alt="instagram-icon" />
          </a>
          <a href="https://twitter.com/unycos_com" target="_blank">
            <img src={twitterIcon} alt="twitter-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCVZBWcLu24xdANe9zpPn2FQ"
            target="_blank"
          >
            <img src={youtubeIcon} alt="youtube-icon" />
          </a>
        </div>
        <div className={styles.contact}>
          <h2>¿Dudas? Contáctanos por whatsapp</h2>
          <Button theme="transparent" fontSize={12} width={180} marginTop={10}>
            <img src={whatsappLogo} alt="whatsapp-logo" />
            +34 653 46 73 60
          </Button>
        </div>
        <div className={styles.lastInfos}>
          <a href="https://unycos.com" target="_blank">
            <img src={logoUnycos} alt="logo-unycos" />
          </a>
          <div className={styles.terms}>
            <h3>Terminos y condiciones</h3>
            <h3>Política de privacidad</h3>
            <h3>Aviso legal</h3>
          </div>
          <div className={styles.bankNotes}>
            <h4>USD ($)</h4>
            <h5>/</h5>
            <h5>EUR (€)</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
