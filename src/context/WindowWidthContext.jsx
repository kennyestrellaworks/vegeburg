import { createContext, useState, useEffect, useContext } from "react";

const WindowWidthContext = createContext();

export const WindowWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
};

// Custom hook for easier usage
export const useWindowWidth = () => useContext(WindowWidthContext);
