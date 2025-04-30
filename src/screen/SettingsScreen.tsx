import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import '../localization/i18n'; 

type languageType = {
  label: string;
  value: string;
};

type renderProps = {
  item: languageType;
};

const renderItem = ({ item }: renderProps) => {
  return (
    <TouchableOpacity style={styles.language}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const SettingsScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const { t } = useTranslation();
  const languages = [
    { label: "English", value: "en" },
    { label: "Turkish", value: "tr" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.languageTitle}>{t('language')}</Text>
        <Text style={styles.selectedLanguageTitle}>{t('select_language')}</Text>
      </View>
      <FlatList
        data={languages}
        renderItem={({ item }) => renderItem({ item })}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  language: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 14,
    color: "#445d7a",
    fontWeight: "bold",
  },
  languageTitle: {
    paddingTop: 34,
    fontWeight:"bold",
    fontSize: 26,
    color: "#445d7a",
  },
  selectedLanguageTitle: {
    padding: 10,
    fontWeight:'400',
    fontSize: 18,
    color: "#7b8fa7",
  },
  titleContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
});
