import { useEffect } from "react";

const useTitleSet = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export default useTitleSet;
