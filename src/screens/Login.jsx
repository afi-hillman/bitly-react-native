import React, { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm, Controller } from "react-hook-form";
import { postLoginUser } from "../utils/api";
import { AuthContext } from "../context/AuthContext";

const Login = ({ navigation }) => {
  const handleNavigation = (path) => {
    navigation.navigate(path);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loginState, setLoginState] = useState("pending");
  const { jwt, setJwt } = useContext(AuthContext);
  const onSubmit = async (data) => {
    try {
      setLoginState("loading");
      const user = await postLoginUser({
        identifier: data.identifier,
        password: data.password,
      });
      console.log(data);
      console.log(user.message);
      setLoginState("success");
      setJwt(user.jwt);
      console.log(user.jwt);
    } catch (error) {
      setLoginState("error");
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
          flex: 0.5,
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
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#EE6123",
          }}
        >
          Login to shorten your links!
        </Text>
        <View
          style={{
            gap: 2,
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Username or Email"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors?.identifier?.message}
              />
            )}
            name="identifier"
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
                secureTextEntry={true}
              />
            )}
            name="password"
            rules={{ required: "This is required" }}
          />
          <Button style={{ width: "100%" }} onPress={handleSubmit(onSubmit)}>
            {loginState === "loading" ? "Logging in..." : "Login"}
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#EE6123",
              width: "100%",
            }}
            onPress={() => handleNavigation("Register")}
          >
            Don't have an account?
          </Button>
        </View>
        {loginState === "loading" && (
          <Image
            source={require("../../assets/loader.svg")}
            style={{ width: 400, height: 400 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Login;
