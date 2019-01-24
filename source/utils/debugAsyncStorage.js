import { AsyncStorage } from "react-native";

export const clear = async () => await AsyncStorage.clear();

export default async () => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    const storage = {};

    for (let index = 0; index < allKeys.length; index++) {
      const key = allKeys[index];

      storage[key] = JSON.parse(await AsyncStorage.getItem(key));
    }

    console.log(storage);
  } catch (error) {
    console.error(error);
  }
};
