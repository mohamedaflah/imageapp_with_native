import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Profile() {
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
      <Text>Profile page</Text>
    </View>
    // </SafeAreaProvider>
  );
}
