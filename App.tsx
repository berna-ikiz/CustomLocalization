import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { LanguageProvider } from "./context/LanguageProvider";

function App(): React.JSX.Element {
  return (
    <LanguageProvider>
      <SafeAreaView style={styles.container}>
        <StackNavigator />
      </SafeAreaView>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
