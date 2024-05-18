import { ReactNode, SetStateAction } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
interface ChildProp {
  children: ReactNode;
  setModalVisible: React.Dispatch<SetStateAction<boolean>>;
  visible: boolean;
}
export default function EmojiPicker({
  setModalVisible,
  children,
  visible,
}: ChildProp) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.topTitleBar}>
          <Text style={styles.titleText}>Choose a Sticker</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" color={"white"} size={20} />
          </Pressable>
        </View>
        <View style={styles.emojiContainer}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: "28%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topTitleBar: {
    width: "100%",
    height: "18%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    backgroundColor: "#464C55",
    alignItems: "center",
  },
  titleText: {
    color: "#ffffff",
    fontSize: 16.3,
  },
  emojiContainer: {
    height: "84%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 2,
    
  },
});
