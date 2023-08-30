import * as SecureStore from "expo-secure-store";

export const setValueFor = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

export const getValueFor = async (key) => {
  let result = await SecureStore.getItemAsync(key);
  //   if (result) {
  //     alert("🔐 Here's your value 🔐 \n" + result);
  //   } else {
  //     alert(`No values stored under ${key}`);
  //   }
  return result;
};
