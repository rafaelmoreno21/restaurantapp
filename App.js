import React, { useState } from "react";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";
import Login from "./app/screens/Account/Login";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? <Login /> : <Navigation />;
}
