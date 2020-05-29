import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurants";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="account"
      tabBarOptions={{
        inactiveTintColor: "#646464",
        activeTintColor: "#ff9900",
      }}
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color }) => screenOptions(route, color),
        };
      }}
    >
      <Tab.Screen
        name="restaurants"
        component={RestaurantsStack}
        options={{ title: "Restaurante" }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />

      <Tab.Screen
        name="top-restaurants"
        component={TopRestaurantsStack}
        options={{ title: "Top 5" }}
      />

      <Tab.Screen
        name="search"
        component={SearchStack}
        options={{ title: "Buscar" }}
      />

      <Tab.Screen
        name="account"
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "account":
      iconName = "account";

      break;
    case "restaurants":
      iconName = "silverware-fork-knife";

      break;
    case "favorites":
      iconName = "heart";

      break;

    case "top-restaurants":
      iconName = "star";

      break;

    case "search":
      iconName = "magnify";

      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
