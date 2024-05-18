import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

import Image1 from "./assets/images/img1.jpg";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSrc={Image1} />
      </View>
      <View style={styles.footerContainer}>
        <Button>Click here</Button>
        <Button>Choose a Picture</Button>
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
    height:"100%"
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
    marginTop:150
  },
});
