import { View, Text, TextInput } from "react-native";
import React from "react";
type FooProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};
export default function MyInputText({
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
}: FooProps) {
  return (
    <TextInput
      autoCapitalize="none"
      style={{
        padding: 20,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
      }}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}
