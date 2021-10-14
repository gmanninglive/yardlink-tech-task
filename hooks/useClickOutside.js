import { useEffect } from "react";

export default function useOnClickOutside(ref, action) {
  useEffect(() => {
    function clickOutside(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      action();
    };
    window.addEventListener("mousedown", clickOutside);
    window.addEventListener("touchstart", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
      window.removeEventListener("touchstart", clickOutside);
    };
  }, []);
}
