import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Mini Motors`;
  }, [title]);
};

export default useTitle;
