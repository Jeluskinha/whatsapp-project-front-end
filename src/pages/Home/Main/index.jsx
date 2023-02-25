import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import MainStyle from "./styles";

function Main() {
  const { statusSection, status, qrCode} = useContext(AuthContext);

  useEffect(()=>{
    statusSection()
  },[])

  console.log(status)
  console.log(qrCode)
  return (
    <MainStyle>
     {status ? <h2>ola</h2> : <img src={qrCode} alt="" />}
    </MainStyle>
  );
}

export default Main;
