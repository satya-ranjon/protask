import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
};

export default useOutsideClick;
