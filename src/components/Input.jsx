import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label = "Input", error, ...rest }) => {
  return (
    <View style={{ width: "100%", alignItems: "flex-start" }}>
      <Text>{label}</Text>
      <TextInput {...rest} style={{ ...styles.input, ...rest.style }} />
      <Text style={{ color: "red" }}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
});

export default Input;
