import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Cart() {
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
      <Text>Cart page</Text>
    </View>
    // </SafeAreaProvider>
  );
}
