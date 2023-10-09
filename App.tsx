import React from "react";
import { StyleSheet, View } from "react-native";
import { MeditationScreen } from "./screens/meditation-screen";

export default function App() {
  return (
    <View style={styles.container}>
      <MeditationScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:25
  },
});