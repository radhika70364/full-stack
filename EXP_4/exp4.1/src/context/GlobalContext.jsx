import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState("Guest");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <GlobalContext.Provider
      value={{ theme, toggleTheme, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
