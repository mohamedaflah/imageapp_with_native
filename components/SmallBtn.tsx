import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode, SetStateAction, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing
} from "react-native-reanimated";

interface ChildProp {
  children: ReactNode;
  type: "refresh" | "save" | "sync";
  setOptions: React.Dispatch<SetStateAction<boolean>>;
  saveImage: () => Promise<void>;
  saveLoading: Boolean;
}
export function SmallButton({
  children,
  type,
  setOptions,
  saveImage,
}: ChildProp) {
  const handleReset = () => {
    setOptions(false);
  };

  const rotation = useSharedValue(0);

  useEffect(() => {
    if (type == "sync") {
      rotation.value = withRepeat(
        withTiming(360, { duration: 2000, easing: Easing.linear }),
        -1
      );
    } else {
      rotation.value = 0;
    }
  }, [type]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  return (
    <View style={styles.smallButtonContainer}>
      <Pressable
        disabled={type == "sync"}
        style={styles.smallButton}
        onPress={type == "refresh" ? handleReset : saveImage}
      >
        <Animated.View style={ animatedStyle }>
          <MaterialIcons name={type} size={28} color={"white"} />
        </Animated.View>
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
