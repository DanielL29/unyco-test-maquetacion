import Button from "../../../components/button";
import Title from "../../../components/title";

import useDynamicWidth from "../../../hooks/useDynamicWidth";

import styles from "./RelationArticles.module.css";

export default function RelationArticles() {
  const { dynamicWidth } = useDynamicWidth();

  return (
    <div className={styles.relationArticles}>
      <Title text="ARTÍCULOS RELACIONADOS" marginBottom={21} />
      <div className={styles.articles}>
        <div>
          <h2>Consejos para nadadores principiantes</h2>
          <span>22.06.2019</span>
        </div>
        <div>
          <h2>
            Recomendaciones para lograr que un niño venza el miedo al agua
          </h2>
          <span>22.06.2019</span>
        </div>
        <div>
          <h2>¿Nadar es un buen método para adelgazar?</h2>
          <span>22.06.2019</span>
        </div>
        <div>
          <h2>Consejos para mejorar la técnica del estilo crol</h2>
          <span>22.06.2019</span>
        </div>
      </div>
      <a href="https://unycos.com/blog" target="_blank">
        <Button
          children="leer más en nuestro blog"
          theme="transparent"
          fontSize={12}
          marginBottom={45}
          width={dynamicWidth < 768 ? 240 : 368}
        />
      </a>
    </div>
  );
}
