import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY_SELECTED_LANGUAGE = "selectedLanguage";

export const saveLanguage = async (value: string) => {
  try {
    await AsyncStorage.setItem(KEY_SELECTED_LANGUAGE, value);
  } catch (e) {
    console.error("Language couldn't be saved");
  }
};

export const getLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY_SELECTED_LANGUAGE);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error("There is an error -> get language");
  }
};
