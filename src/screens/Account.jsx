import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";
import { setValueFor } from "../utils/helper/secureStore";

const Account = ({ navigation }) => {
  const { setJwt } = useContext(AuthContext);
  const [logoutState, setLogoutState] = useState("pending");
  const handleNavigation = (path) => {
    navigation.navigate(path);
  };

  const handleLogout = async () => {
    setLogoutState("loading");
    await setValueFor("jwt", "");
    setJwt(null);
    setLogoutState("success");
    handleNavigation("Home");
  };
  return (
    <SafeAreaView>
      <Text>Account</Text>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Button
          onPress={() => {
            handleLogout();
          }}
        >
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Account;
