import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Image1 from "./assets/images/img1.jpg";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { BigCircleButton } from "./components/BigCirclebtn";
import { SmallButton } from "./components/SmallBtn";
import EmojiPicker from "./components/EmojiPicker";
import EmojiSticker from "./components/EmojiSticker";
export default function App() {
  const [selectedImage, setImage] = useState(Image1);
  const [showOptions, setShowOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  useEffect(() => {}, [selectedImage]);
  const [emojis] = useState([
    require("./assets/emojies/100-3.png"),
    require("./assets/emojies/clap2.png"),
    require("./assets/emojies/clap2.png"),
    require("./assets/emojies/fire.webp"),
    require("./assets/emojies/fire.webp"),
    require("./assets/emojies/smile3.png"),
    require("./assets/emojies/smile3.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/love.png"),
    require("./assets/emojies/smile3.png"),
  ]);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSrc={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
      <EmojiSticker imageSize={36} stickerSource={pickedEmoji} key={"()"} />
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
              <BigCircleButton setModalVisibility={setModalVisible} />
              <SmallButton type="save">save</SmallButton>
            </View>
          </>
        )}

        <EmojiPicker setModalVisible={setModalVisible} visible={modalVisible}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emojis}
            contentContainerStyle={styles.emojiListcontainer}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setModalVisible(false);
                    setPickedEmoji(item);
                  }}
                >
                  <Image source={item} style={styles.emoji} />
                </Pressable>
              );
            }}
          />
        </EmojiPicker>
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

    justifyContent: "flex-end",
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
  emojiListcontainer: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
    height: 200,
    // width: "100%",
    gap: 20,
  },
  emoji: {
    width: 60,
    height: 60,
    objectFit: "contain",
  },
});
