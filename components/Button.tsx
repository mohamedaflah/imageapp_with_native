import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ children }) {
  const handleButtonPress = () => {
    alert("Your Pressed in Button");
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonLabel}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 65,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 11,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "skyblue",
  },
  buttonLabel: {
    color: "#ffffff",
    fontSize: 22,
  },
});
