import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import Loadin from "../../components/Loadin";

export default function Account() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loadin isVisible={true} text="Cargando..." />;
  return login ? <UserLogin /> : <UserRegister />;
}
