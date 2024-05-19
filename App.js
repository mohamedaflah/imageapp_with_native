import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { captureRef } from "react-native-view-shot";
import Image1 from "./assets/images/img1.jpg";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import { useEffect, useRef, useState } from "react";
import { BigCircleButton } from "./components/BigCirclebtn";
import { SmallButton } from "./components/SmallBtn";
import EmojiPicker from "./components/EmojiPicker";
import EmojiSticker from "./components/EmojiSticker";
import * as MediaLibrary from "expo-media-library";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const [selectedImage, setImage] = useState(Image1);
  const [showOptions, setShowOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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

  const [status, requestPermision] = MediaLibrary.usePermissions();
  if (status == null) {
    requestPermision();
  }
  const imageRef = useRef(null);
  const [saveLoading, setSaveLoading] = useState(false);

  const handleScreenshotSave = async () => {
    try {
      setSaveLoading(true);
      const localUri = await captureRef(imageRef, {
        height: 400,
        quality: 1,
      });
      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Image Saved in your local");
      }
      setSaveLoading(false);
    } catch (error) {
      alert(error);
    }
  };
  const [containerPropery, setContainerPropery] = useState(null);
  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={styles.imageContainer}
        ref={imageRef}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setContainerPropery({ width, height });
        }}
      >
        <ImageViewer imageSrc={selectedImage} />
        <EmojiSticker
          containerProperty={containerPropery}
          imageSize={36}
          stickerSource={pickedEmoji}
          key={"()"}
        />
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
              <BigCircleButton setModalVisibility={setModalVisible} />
              <SmallButton
                type={`${saveLoading ? "sync" : "save"}`}
                saveImage={handleScreenshotSave}
                saveLoading={saveLoading}
              >
                save
              </SmallButton>
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
      <StatusBar style="inverted" />
    </GestureHandlerRootView>
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
    marginTop: 50,
    position: "relative",
    height:550
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
