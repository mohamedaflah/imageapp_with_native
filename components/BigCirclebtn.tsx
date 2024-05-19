import { Pressable, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SetStateAction } from "react";

interface ChildProp {
  setModalVisibility: React.Dispatch<SetStateAction<boolean>>;
}
export function BigCircleButton({ setModalVisibility }: ChildProp) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        style={styles.circleButton}
        onPress={() => setModalVisibility(true)}
      >
        <MaterialIcons name="add" size={35} color={"#25292e"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 73,
    height: 73,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#ffd33d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  circleButton: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: "100%",
    backgroundColor: "#ffffff",
  },
});
