import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
export default function Login({ navigation }) {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo1.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <Text>Login Form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text></Text>
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      Aun no tienes una cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Registrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 250,
    marginTop: 1,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#ff9900",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#ff9900",
    margin: 40,
  },
});
