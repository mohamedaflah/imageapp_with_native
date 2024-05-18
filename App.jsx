import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Image1 from "./assets/images/img1.jpg";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { useEffect, useState } from "react";
export default function App() {
  const [selectedImage, setImage] = useState(Image1);
  useEffect(() => {
    
    console.log("🚀 ~ useEffect ~ image:", selectedImage)
  }, [selectedImage]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSrc={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
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
    alignItems: "center",
    marginTop: 150,
  },
});
