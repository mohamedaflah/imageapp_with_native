import axios from "axios";
import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

export default ImageViewer = ({ imageSrc }) => {
  const [randomeImage, setRandome] = useState(null);
  useEffect(() => {
    axios
      .get(`https://source.unsplash.com/random`)
      .then((response) => {
        setRandome(response.request.responseURL);
        console.log(response.request.responseURL, " () data");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [imageSrc]);
  return (
    <Image
      source={typeof imageSrc === "string" ? { uri: imageSrc } : imageSrc}
      // source={{ uri: randomeImage }}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 380,
    objectFit:"cover",
    height: 500,
    borderRadius: 10,
  },
});
