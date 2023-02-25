import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState();
  const [qrCode, setQrCode] = useState();
  const [contacts, setContatcs] = useState([]);

  const listAllContacts = async () => {
    api
      .get("/list")
      .then((res) => setContatcs(res.data))
      .catch((error) => error);
  };

  const statusSection = async () => {
    const response = await api
      .get("/status")
      .then((res) => res.data)
      .catch((error) => error);

      setStatus(response.connected)
      setQrCode(response.qr_code?.base64Qr)
  };

  return (
    <AuthContext.Provider
      value={{
        statusSection,
        status,
        qrCode,
        listAllContacts,
        contacts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
