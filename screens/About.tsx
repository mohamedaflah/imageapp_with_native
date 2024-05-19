import { Text, View } from "react-native";

export default function About() {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>About page</Text>
    </View>
  );
}
