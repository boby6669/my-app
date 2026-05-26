import { Text, View, StyleSheet } from "react-native";
import About from "./(tabs)/About";
import Profile from "./(tabs)/profile";
import { Tabs } from "expo-router/ui";
import { Color } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container }>
     
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <About />
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
