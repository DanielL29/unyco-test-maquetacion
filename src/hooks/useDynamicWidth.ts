import { useEffect, useState } from "react";

export default function useDynamicWidth() {
  const [dynamicWidth, setDynamicWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setDynamicWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setDynamicWidth(window.innerWidth)
      );
    };
  }, [dynamicWidth]);

  return {
    dynamicWidth,
  };
}
