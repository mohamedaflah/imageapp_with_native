import { Image, StyleSheet } from "react-native";

export default ImageViewer = ({ imageSrc }) => {
  return <Image source={imageSrc} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,
    borderRadius: 10,
  },
});