import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Importer les icônes Material

type HeaderNavigationProps = {
  paddingTop: number;
  pageTitle: string;
};

export default function HeaderNavigation({
  paddingTop,
  pageTitle,
}: HeaderNavigationProps) {
  const router = useRouter();

  return (
    <View style={[styles.headerContainer, { paddingTop }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="black"
          style={{ marginTop: 10 }}
        />
        <Text style={styles.pageTitle}>{pageTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 25,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  backButton: {
    flexDirection: "row",
    paddingTop: 5,
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 18,
    color: "#303F9F",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
