import React from "react";
import { Pressable, Text } from "react-native";

const Button = ({ children = "Button", ...rest }) => {
  return (
    <Pressable
      {...rest}
      style={{
        backgroundColor: "#0E3042",
        padding: 10,
        borderRadius: 8,
        ...rest.style,
      }}
    >
      <Text
        style={{
          width: 300,
          color: "white",
          textAlign: "center",
          ...rest.style,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
