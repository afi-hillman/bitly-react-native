import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";

const Modal = ({ slug, close }) => {
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  return (
    <SafeAreaView
      style={{
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          //   flex: 0.6,
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
          width: "80%",
        }}
      >
        <Text>MODAL</Text>
        <Text>Link : {`${BASE_URL}/${slug}`}</Text>
        <Text>QR</Text>
        <Button onPress={close}>Close</Button>
      </View>
    </SafeAreaView>
  );
};

export default Modal;
