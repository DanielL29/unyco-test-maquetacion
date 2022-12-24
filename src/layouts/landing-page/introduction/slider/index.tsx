import styles from "./Slider.module.css";

import useSpotlight, { Spotlight } from "../../../../hooks/api/useSpotlight";
import { useEffect, useState } from "react";

interface IPreviewProps {
  spotlight: Spotlight;
}

function Preview({ spotlight }: IPreviewProps) {
  return (
    <div className={styles.content}>
      <img src={spotlight.image} alt="next-image" />
      <h2>{spotlight.title}</h2>
    </div>
  );
}

export default function Slider() {
  const { spotlights } = useSpotlight();
  const [current, setCurrent] = useState<Spotlight | null>(null);
  const [spotlightsOrdered, setSpotlightsOrdered] = useState<
    Spotlight[] | null
  >(spotlights);

  useEffect(() => {
    playSlider();
  }, [spotlights, current]);

  function playSlider() {
    if (spotlights && current) {
      setTimeout(() => {
        setCurrent(spotlights[current!.order]);
      }, 3000);

      generateSort();
    } else if (spotlights) {
      setCurrent(spotlights[0]);
    }
  }

  function generateSort() {
    let hashSpotlight: { [key: string]: Spotlight } = {};

    spotlights?.forEach((spotlight, index) => {
      if (spotlight.order > current!.order) {
        hashSpotlight[index + 10] = spotlight;
      } else if (spotlight.order < current!.order) {
        hashSpotlight[index - 10] = spotlight;
      }
    });

    setSpotlightsOrdered([...Object.values(hashSpotlight), current!]);
  }

  return (
    <div className={styles.slider}>
      <img src={current?.image} alt="current-image" />
      <div className={styles.heading}>
        <h1>{current?.title}</h1>
        <p>{current?.description}</p>
        <div className={styles.nextImages}>
          {spotlightsOrdered
            ?.filter((spotlight) => spotlight.order !== current?.order)
            .map((spotlight) => (
              <Preview key={spotlight._id} spotlight={spotlight} />
            ))}
        </div>
        <div className={styles.allImages}>
          {spotlightsOrdered?.map((spotlight) => (
            <Preview key={spotlight._id} spotlight={spotlight} />
          ))}
        </div>
      </div>
    </div>
  );
}
