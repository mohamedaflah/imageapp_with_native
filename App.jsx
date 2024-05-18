import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Image1 from "./assets/images/img1.jpg";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { BigCircleButton } from "./components/BigCirclebtn";
import { SmallButton } from "./components/SmallBtn";
export default function App() {
  const [selectedImage, setImage] = useState(Image1);
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ image:", selectedImage);
  }, [selectedImage]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSrc={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        {!showOptions ? (
          <>
            <Button>Click here</Button>
            <Button pressEvent="ImagePick" setImage={setImage}>
              <View>
                <FontAwesome
                  name="address-card"
                  size={20}
                  color={"#25292e"}
                  style={{ marginEnd: 2, color: "#ffffff" }}
                />
              </View>
              Choose a Picture
            </Button>
            <Button pressEvent={"modal"} setShowOptions={setShowOptions}>
              Use this image
            </Button>
          </>
        ) : (
          <>
            <View style={styles.optionBox}>
              <SmallButton type="refresh" setOptions={setShowOptions}>
                reset
              </SmallButton>
              <BigCircleButton />
              <SmallButton type="save">save</SmallButton>
            </View>
          </>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 320,
    height: 400,
    borderRadius: 10,
  },
  footerContainer: {
    flex: 1,
    flexDirection: "column",
    
    justifyContent:"flex-end",
    marginTop: 150,
    display: "flex",
    paddingBottom: 50,
  },
  optionBox: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
});
