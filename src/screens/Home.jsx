import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const Home = ({ navigation }) => {
  const handleNavigation = (path) => {
    navigation.navigate(path);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#61B3DE",
      }}
    >
      <View
        style={{
          flex: 0.6,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EFF7FC",
          padding: 20,
          borderRadius: 16,
          shadowColor: "#EE6123",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Image
          source={require("../../assets/king-resize-logo.png")}
          style={{ width: 300, height: 300 }}
        />
        <View style={{ flexDirection: "column", gap: 8 }}>
          <Button onPress={() => handleNavigation("Login")}>Login</Button>
          <Button onPress={() => handleNavigation("Register")}>Register</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
