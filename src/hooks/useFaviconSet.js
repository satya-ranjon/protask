import { useEffect } from "react";

const useFaviconSet = () => {
  const { matches } = window.matchMedia("(prefers-color-scheme: light)");
  useEffect(() => {
    // Conditionally set the favicon based on a condition
    const faviconLink = document.getElementById("favicon");
    if (matches) {
      // faviconLink.href = "/favicon11.svg";
    } else {
      // faviconLink.href = "/favicon2.svg";
    }
  }, []);
};

export default useFaviconSet;
