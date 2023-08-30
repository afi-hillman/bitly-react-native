import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import { getValueFor, setValueFor } from "../utils/helper/secureStore";
import { AuthContext } from "../context/AuthContext";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  const { jwt, setJwt } = useContext(AuthContext);

  const fetchSecureStore = async () => {
    try {
      const jwtSecureStore = await getValueFor("jwt");
      setJwt(jwtSecureStore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (jwt) {
      setValueFor("jwt", jwt);
    } else {
      fetchSecureStore();
    }
    // getValueFor("jwt");
  }, [jwt]);

  //   useEffect(() => {
  //     if (!jwt) {
  //       fetchSecureStore();
  //     }
  //   }, []);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false, animation: "simple_push" }}
      >
        {jwt ? (
          <Screen name="Dashboard" component={AuthNavigator}></Screen>
        ) : (
          <>
            <Screen name="Home" component={Home}></Screen>
            <Screen name="Register" component={Register}></Screen>
            <Screen name="Login" component={Login}></Screen>
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
