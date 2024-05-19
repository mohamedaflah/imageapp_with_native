import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";

export default function Contact() {
  return (
    // <SafeAreaProvider>
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          height: 45,
          width: 320,
          borderWidth: 2,
          borderColor: "grey",
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <TextInput
          placeholder="Email address"
          keyboardType="email-address"
        ></TextInput>
      </View>
    </View>
    // </SafeAreaProvider>
  );
}
