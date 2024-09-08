import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>kader sahbi kk</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
