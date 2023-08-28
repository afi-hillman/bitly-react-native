import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm, Controller } from "react-hook-form";
import { postRegisterUser } from "../utils/api";

const Register = ({ navigation }) => {
  const handleNavigation = (path) => {
    navigation.navigate(path);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [registerState, setRegisterState] = useState("pending");
  const [jwtCookie, setJwtCookie] = useState("");
  const onSubmit = async (data) => {
    try {
      setRegisterState("loading");
      const newUser = await postRegisterUser({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log(newUser);
      setRegisterState("success");
      setJwtCookie(newUser.jwt);
    } catch (error) {
      setRegisterState("error");
      console.log(error);
    }
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
          flex: 0.7,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EFF7FC",
          padding: 10,
          paddingBottom: 40,
          borderRadius: 16,
          shadowColor: "#EE6123",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width: "90%",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#EE6123",
            textAlign: "center",
          }}
        >
          Become a short king today! 👑
        </Text>
        <View
          style={{
            gap: 8,
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Username"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors?.username?.message}
              />
            )}
            name="username"
            rules={{ required: "This is required" }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors?.email?.message}
              />
            )}
            name="email"
            rules={{ required: "This is required" }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors?.password?.message}
              />
            )}
            name="password"
            rules={{ required: "This is required" }}
          />
          <Button style={{ width: "100%" }} onPress={handleSubmit(onSubmit)}>
            Register
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#EE6123",
              width: "100%",
            }}
            onPress={() => handleNavigation("Login")}
          >
            Already a member?
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
