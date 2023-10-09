import React, { FC, memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import moment from "moment";
import Colors from "../../../../constants/Colors";
import { styles } from "../../index.styles";

type Props = {
  isPlaying: boolean;
  keyIndex: number;
  duration: number;
  onPress: () => void;
};
const CountDown: FC<Props> = ({ isPlaying, keyIndex, duration, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isPlaying}>
      <CountdownCircleTimer
        key={keyIndex}
        isPlaying={isPlaying}
        duration={duration}
        colors={[Colors.darkBlue, Colors.mediumBlue, Colors.lightBlue]}
        colorsTime={[duration, duration / 2, 0]}
        initialRemainingTime={duration}
      >
        {({ remainingTime }) => (
          <Text style={styles.clock}>
            {moment.utc(remainingTime * 1000).format("HH:mm:ss")}
          </Text>
        )}
      </CountdownCircleTimer>
    </TouchableOpacity>
  );
};
export default memo(CountDown);
