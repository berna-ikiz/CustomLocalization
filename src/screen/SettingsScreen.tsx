import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import "../localization/i18n";
import { i18n, TFunction } from "i18next";
import { useLanguage } from "../../context/LanguageProvider";

const renderItem = (
  { item }: { item: string },
  t: TFunction<"translation", undefined>,
  i18n: i18n,
  language: string,
  setLanguage: ((arg0: string) => void) 
) => {

  const handleChangeLang = (lang: string) => {
    if(lang){
      setLanguage(lang)
    }
  };

  return (
    <TouchableOpacity
      style={language === item
        ? styles.selectedLanguage
        : styles.language}
      onPress={() => handleChangeLang(item)}
    >
      <Text style={language === item
        ? styles.selectedLanguageText
        : styles.textLang}>{t(item)}</Text>
      <Text style={styles.textShortLang}>{item}</Text>
    </TouchableOpacity>
  );
};

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const {saveSelectedLanguage, languages, language} = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.languageTitle}>{t(language)}</Text>
        <Text style={styles.middleTitle}>{t('welcome')}</Text>
        <Text style={styles.selectedLanguageTitle}>{t("select_language")}</Text>
      </View>
      <FlatList
        data={languages}
        renderItem={({ item }) =>
          renderItem({ item }, t, i18n, language, saveSelectedLanguage)
        }
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    gap:2
  },
  language: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedLanguage:{
    padding: 10,
    backgroundColor: "#445d7a",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedLanguageText:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  textLang: {
    fontSize: 24,
    color: "#445d7a",
    fontWeight: "bold",
  },
  textShortLang: {
    fontSize: 10,
    color: "#c6d8ed",
    fontWeight: "bold",
  },
  middleTitle: {
    fontSize: 16,
    color: "#aac4e3",
    fontWeight:'400',
    paddingTop:8
  },
  languageTitle: {
    paddingTop: 36,
    fontWeight: "bold",
    fontSize: 26,
    color: "#445d7a",
  },
  selectedLanguageTitle: {
    padding: 10,
    fontWeight: "400",
    fontSize: 20,
    color: "#7b8fa7",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
