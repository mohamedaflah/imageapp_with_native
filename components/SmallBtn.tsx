import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode, SetStateAction } from "react";

interface ChildProp {
  children: ReactNode;
  type: "refresh" | "save";
  setOptions: React.Dispatch<SetStateAction<boolean>>;
}
export function SmallButton({ children, type, setOptions }: ChildProp) {
  const handleReset = () => {
    setOptions(false);
  };
  const handleSave = () => {
    alert("Save");
  };
  return (
    <View style={styles.smallButtonContainer}>
      <Pressable
        style={styles.smallButton}
        onPress={type == "refresh" ? handleReset : handleSave}
      >
        <MaterialIcons name={type} size={28} color={"white"} />
        <Text style={{ color: "white", fontSize: 16 }}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  smallButtonContainer: {
    height: 74,
    // width: 74,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  smallButton: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    justifyContent: "center",
    alignContent: "center",
  },
});
