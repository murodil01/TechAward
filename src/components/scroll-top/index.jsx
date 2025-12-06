import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sahifa o'zgarganda avtomatik tepaga sakraydi (animatsiyasiz)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTop;
