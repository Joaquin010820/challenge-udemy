import { useEffect } from "react";
export default function useKey(key, action) {
  useEffect(() => {
    function callBack(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callBack);

    // this return statement is the clean uo function in useEffect where in after the unount it return to ist default
    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [action, key]);
}
