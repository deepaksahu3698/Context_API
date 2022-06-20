import React from "react";

export const BUttonContext = React.createContext();

export function ButtonChange({ children }) {
  const [login, setlogin] = React.useState("LOGOUT"); // "light", "dark"

  const togglelogin = () => {
    setlogin(login === "LOGOUT" ? "LOGIN" : "LOGOUT");
  };

  return (
    <BUttonContext.Provider value={{ login, togglelogin }}>
      {children}
    </BUttonContext.Provider>
  );
}
export default ButtonChange
