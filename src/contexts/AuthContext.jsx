import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [contacts, setContatcs] = useState([]);

  const listAllContacts = async () => {
    api.get("/list")
      .then((res) => setContatcs(res.data))
      .catch((error) => error);
  };

  return (
    <AuthContext.Provider
      value={{
        listAllContacts,
        contacts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
