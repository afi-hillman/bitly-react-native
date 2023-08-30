import React from "react";
import Dashboard from "../screens/Dashboard";
import Links from "../screens/Links";
import Account from "../screens/Account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const AuthNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard"
              size={24}
              color={focused ? "#EE6123" : "#0E3042"}
            />
          ),
          tabBarLabelStyle: { color: "#000000" },
        }}
      ></Screen>
      <Screen
        name="Links"
        component={Links}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="link"
              size={24}
              color={focused ? "#EE6123" : "#0E3042"}
            />
          ),
          tabBarLabelStyle: { color: "#000000" },
        }}
      ></Screen>
      <Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-circle-o"
              size={24}
              color={focused ? "#EE6123" : "#0E3042"}
            />
          ),
          tabBarLabelStyle: { color: "#000000" },
        }}
      ></Screen>
    </Navigator>
  );
};

export default AuthNavigator;
