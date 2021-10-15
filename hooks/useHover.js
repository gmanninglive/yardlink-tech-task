import { useState, useEffect, useRef } from "react";

export default function useHover() {
    const [value, setValue] = useState(false);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    const ref = useRef(null);
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );
    return [ref, value];
  }