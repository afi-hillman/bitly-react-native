import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";

const App = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false, animation: "simple_push" }}
      >
        <Screen name="Home" component={Home}></Screen>
        <Screen name="Register" component={Register}></Screen>
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Dashboard" component={Dashboard}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
