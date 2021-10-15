import { useEffect } from "react";

/**
 * 
 * @param {DomRef} ref 
 * @param {function} action
 * 
 * Takes reference for element. Checks for user clicks.
 * Action is called when user clicks outside element 
 */
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
