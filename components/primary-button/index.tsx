import React, { FC,memo } from "react";
import { Text, ViewStyle, TouchableOpacity } from "react-native";
import { styles } from "./index.styles";

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disable?: boolean;
};
const PrimaryButton: FC<Props> = ({ title, onPress, style, disable }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style, styles.container]}
      disabled={disable}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default memo(PrimaryButton);
