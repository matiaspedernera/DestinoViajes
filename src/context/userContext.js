import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const loginUsuario = (userInfo) => {
    setUser(userInfo);
  };

  const logoutUsuario = () => {
    setUser();
  };

  return (
    <UserContext.Provider value={{ loginUsuario, logoutUsuario, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
