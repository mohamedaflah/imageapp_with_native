import { Pressable, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
export default function Button({
  children,
  pressEvent,
  setImage,
  setShowOptions,
}) {
  const handleButtonPress = () => {
    alert("Your Pressed in Button");
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    } else {
      alert("You didn't select any image");
    }
  };
  const handleModal = () => {
    setShowOptions(true);
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={
          pressEvent == "ImagePick"
            ? handleImagePick
            : pressEvent == "modal"
            ? handleModal
            : handleButtonPress
        }
      >
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
    display: "flex",
    backgroundColor: "skyblue",
    borderWidth: 4,
    borderColor: "cyan",
  },
  buttonLabel: {
    color: "#ffffff",
    fontSize: 22,
    display: "flex",
    alignItems: "center",
    gap: 3,
  },
});
