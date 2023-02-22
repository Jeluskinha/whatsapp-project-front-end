import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import HomeStyle from "./styles";

const dataBase = [];

function Home() {
  const { contacts, listAllContacts } = useContext(AuthContext);

  useEffect(() => {
    listAllContacts();
  }, []);

  const listar = contacts.map((e) => {
    let newUser = {
      name: e.contact.name ? e.contact.name : e.contact.id.user.slice(2),
      nameDefault: e.contact.notifyName,
      phone: e.contact.id.user,
    };

    if (newUser.phone.length < 18) {
      dataBase.push(newUser);
    }
    return e.contact.id;
  });


  console.log(dataBase);
  return (
    <HomeStyle>
      <ul>
        {dataBase.map((e) => (
          <li>
            <h2>{e.name}</h2>
            <h3>{e.nameDefault}</h3>
            <h3>{e.phone}</h3>
          </li>
        ))}
      </ul>
    </HomeStyle>
  );
}

export default Home;
