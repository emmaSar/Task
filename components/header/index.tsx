import React, { FC } from "react";
import { Text, View,  } from "react-native";
import { styles } from "./index.styles";

type Props = {
  title: string;
};
const HeaderComponent: FC<Props> = ({ title }) => {
  return (
    <View
      style={ styles.container}
    >
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default HeaderComponent;
