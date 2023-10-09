import React, { FC } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./index.styles";

type Props = {
  isVisible: boolean;
  title: string;
  subTitle: string;
  children: React.ReactNode;
  onBackdropPress: () => void;
};
const BottomSheet: FC<Props> = ({
  isVisible,
  onBackdropPress,
  children,
  title,
  subTitle,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={"bounceInUp"}
      animationInTiming={1000}
      animationOutTiming={1000}
      style={styles.modal}
      onBackdropPress={onBackdropPress}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        {children}
      </View>
    </Modal>
  );
};
export default BottomSheet;
