import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
type FooProps = {
  body: string;
  onSignInPress?: () => void;
};
export default function MyButton({ body, onSignInPress }: FooProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onSignInPress}>
      <Text style={styles.text}>{body}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#303F9F",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
